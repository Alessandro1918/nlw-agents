import { pgTable, text, timestamp, uuid, vector } from 'drizzle-orm/pg-core'
import { rooms } from './rooms.ts'

export const audioChunks = pgTable('audio_chunks', {
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid()
    .references(() => rooms.id)
    .notNull(),
  transcription: text().notNull(),
  embeddings: vector({ dimensions: 768 }).notNull(),  // will use the model "text-embedding-004", with dimension size = 768 tokens. https://ai.google.dev/gemini-api/docs/models#text-embedding
  createdAt: timestamp().defaultNow().notNull(),
})
