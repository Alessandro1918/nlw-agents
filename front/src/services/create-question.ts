import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { GetRoomQuestionsResponse } from './get-room-questions'

type CreateQuestionRequest = {
  question: string
}

type CreateQuestionResponse = {
  questionId: string
  answer: string | null
}

export function createQuestionService(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const result: CreateQuestionResponse = await response.json()

      return result
    },

    // Optimist interface: add question to the UI even before db insertion
    onMutate({ question }) {
      const questions = queryClient.getQueryData<GetRoomQuestionsResponse>([
        'get-questions',
        roomId,
      ])

      const questionsArray = questions ?? []

      // New object with almost all fields with placeholder data, just to show the "question" on the UI
      const newQuestion = {
        id: crypto.randomUUID(),              // Fake
        question,                             // Real
        answer: null,                         // Fake
        createdAt: new Date().toISOString(),  // Fake
        isGeneratingAnswer: true,             // Fake
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-questions', roomId],
        [newQuestion, ...questionsArray]
      )

      return { newQuestion, questions }
    },


    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] })
    // },

    // Update the new question with the data it got after the db insert
    onSuccess(data, _variables, context) {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-questions', roomId],
        (questions) => {
          if (!questions || !context.newQuestion) {
            return questions
          }

          // Return all questions, but:
          return questions.map((question) => {
            // This question is the new one:
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              }
            }
            // This question was not the new one:
            return question
          })
        }
      )
    },

    onError(_error, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ['get-questions', roomId],
          context.questions
        )
      }
    }
  })
}
