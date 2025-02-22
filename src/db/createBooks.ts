import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function createBooks() {
  const affiliations = [
    'สำนักพิมพ์แห่งจุฬาลงกรณ์มหาวิทยาลัย',
    'สำนักพิมพ์มหาวิทยาลัยธรรมศาสตร์',
    'สำนักพิมพ์มหาวิทยาลัยเชียงใหม่',
    'สำนักพิมพ์แห่งมหาวิทยาลัยมหิดล',
    'สำนักพิมพ์มหาวิทยาลัยกรุงเทพ',
    'สำนักพิมพ์มหาวิทยาลัยรามคำแหง',
    'สำนักพิมพ์แห่งมหาวิทยาลัยบูรพา',
    'สำนักพิมพ์มหาวิทยาลัยสยาม',
    'สำนักพิมพ์แห่งมหาวิทยาลัยศิลปากร',
    'สำนักพิมพ์มหาวิทยาลัยอัสสัมชัญ',
  ]

  let generatedStrings = new Set()
  function generateUniqueString() {
    let uniqueString = ''
    do {
      // Generate a random uppercase letter (A-Z)
      let letter = String.fromCharCode(65 + Math.floor(Math.random() * 26))

      // Generate a 11-digit random number and pad it with leading zeros
      let number = Math.floor(Math.random() * 1000000000000)
        .toString()
        .padStart(11, '0')

      // Combine the letter and the number
      uniqueString = letter + number
    } while (generatedStrings.has(uniqueString)) // Check for duplicates

    // Add the new string to the set
    generatedStrings.add(uniqueString)

    return uniqueString
  }

  const authors = [
    {
      firstName: 'จเด็ด',
      lastName: 'คงธรรม',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'สมชาย',
      lastName: 'สุขใจ',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'สุชาติ',
      lastName: 'สุขสันต์',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'ประเสริฐ',
      lastName: 'สุขสม',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'วิไล',
      lastName: 'วงศ์สว่าง',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      firstName: 'ศักดิ์ชัย',
      lastName: 'ศักดิ์สิทธิ์',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      id: 7,
      firstName: 'สุวิมล',
      lastName: 'สุขุม',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
    {
      id: 8,
      firstName: 'วีรยุทธ',
      lastName: 'วงศ์สว่าง',
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
  ]

  for (const author of authors) {
    await prisma.author.create({
      data: {
        firstName: author.firstName,
        lastName: author.lastName,
        affiliation: author.affiliation,
      },
    })
  }

  const books = [
    {
      title: 'Java เบื้องต้น',
      isbn: generateUniqueString(),
      category: 'คอมพิวเตอร์',
      authorId: 1,
    },
    {
      title: 'Python สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 2,
    },
    {
      title: 'C++ สำหรับพัฒนาเกม',
      isbn: generateUniqueString(),
      category: 'พัฒนาเกม',
      authorId: 3,
    },
    {
      title: 'JavaScript สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 4,
    },
    {
      title: 'HTML/CSS สำหรับออกแบบเว็บ',
      isbn: generateUniqueString(),
      category: 'ออกแบบเว็บ',
      authorId: 5,
    },
    {
      title: 'Angular สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 6,
    },
    {
      title: 'React สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 7,
    },
    {
      title: 'Vue.js สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 8,
    },
    {
      title: 'Node.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 2,
    },
    {
      title: 'Ruby on Rails สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 3,
    },
    {
      title: 'Laravel สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 4,
    },
    {
      title: 'Django สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 5,
    },
    {
      title: 'Flask สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 6,
    },
    {
      title: 'Express.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 7,
    },
    {
      title: 'Koa.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 8,
    },
    {
      title: 'Hapi สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 2,
    },
    {
      title: 'Sails.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 3,
    },
    {
      title: 'Feathers.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 4,
    },
    {
      title: 'Nest.js สำหรับพัฒนาเซิร์ฟเวอร์',
      isbn: generateUniqueString(),
      category: 'พัฒนาเซิร์ฟเวอร์',
      authorId: 5,
    },
    {
      title: 'Next.js สำหรับพัฒนาเว็บ',
      isbn: generateUniqueString(),
      category: 'พัฒนาเว็บ',
      authorId: 6,
    },
  ]

  for (const book of books) {
    await prisma.book.create({
      data: {
        title: book.title,
        isbn: book.isbn,
        category: book.category,
      },
    })
  }

  /* Start Book */
  const authorRandom = authors[Math.floor(Math.random() * authors.length)]
  const cmAffiliation = await prisma.author.create({
    data: {
      firstName: authorRandom.firstName,
      lastName: authorRandom.lastName,
      affiliation:
        affiliations[Math.floor(Math.random() * affiliations.length)],
    },
  })

  const responseBooks = await prisma.book.findMany()
  const responseAuthors = await prisma.author.findMany()
  for (const rpbook of responseBooks) {
    const randomAuthor =
      responseAuthors[Math.floor(Math.random() * responseAuthors.length)]
    await addAuthor(rpbook.id, randomAuthor.id)
  }

  console.log('Database has been initialized with books.')

  async function addAuthor(bookId: number, autherId: number) {
    await prisma.book.update({
      where: { id: bookId },
      data: {
        author: {
          connect: {
            id: autherId,
          },
        },
      },
    })
  }
  /* End Book */
}
