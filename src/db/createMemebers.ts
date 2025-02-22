import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createMembers = async () => {
  const members = [
    {
      firstName: 'วีรยุทธ',
      lastName: 'ศิริไพบูลย์',
      phone: '081-234-5678',
    },
    {
      firstName: 'นันทพร',
      lastName: 'สุนทรพจน์',
      phone: '089-123-4567',
    },
    {
      firstName: 'ศักดิ์ชัย',
      lastName: 'รัตนชัย',
      phone: '086-987-6543',
    },
    {
      firstName: 'พิชญา',
      lastName: 'วัฒนกุล',
      phone: '083-456-7890',
    },
    {
      firstName: 'ธนา',
      lastName: 'ศักดิ์ศิริ',
      phone: '082-111-2222',
    },
    {
      firstName: 'นลินี',
      lastName: 'จันทร์สว่าง',
      phone: '085-333-4444',
    },
    {
      firstName: 'วีรศักดิ์',
      lastName: 'วัฒนศิริ',
      phone: '081-555-6666',
    },
    {
      firstName: 'ศจิกา',
      lastName: 'ศิริผล',
      phone: '089-777-8888',
    },
    {
      firstName: 'ธวัชชัย',
      lastName: 'รัตนธัญ',
      phone: '086-999-0000',
    },
  ]

  for (const member of members) {
    await prisma.member.create({
      data: {
        firstName: member.firstName,
        lastName: member.lastName,
        phone: member.phone,
      },
    })
  }
}
