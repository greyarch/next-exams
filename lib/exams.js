import db from './db'

export default async () => {
  const exams = await db.once('value')
  return exams.val()
}
