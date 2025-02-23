import express, { Request, Response } from 'express'
import * as serv from '../services/bookService'
import type { Book } from '../models/book'
import dotenv from 'dotenv'
dotenv.config()
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  if (req.query.group) {
    const group = req.query.group as string
    const filteredBooks = serv.getBookByGroups([group])
    res.json(filteredBooks)
  } else {
    res.json(await serv.getAllBooks())
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = await serv.getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

router.get('/category/:category',async (req: Request, res: Response) => {
  const category = req.params.category;
  const book = await serv.getBookByCategory(category)
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

router.get('/group/:group',async (req: Request, res: Response) => {
  const group = req.params.group;
  // 1. ตัดข้อความจาก ,
  const groupArray = group.split(',');
  // 2. จัดข้อความไม่ให้มีช่องว่าง
  const trimmedArray = groupArray.map(item => item.trim());
  // 3. ลบข้อความที่เป็นช่องว่างออก
  const filteredArray = trimmedArray.filter(item => item !== '');
  const book = await serv.getBookByGroups(filteredArray)
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});


router.post('/', async (req: Request, res: Response) => {
  const newBook: Book = req.body
  await serv.addBook(newBook)
  res.json(newBook)
})

export default router;