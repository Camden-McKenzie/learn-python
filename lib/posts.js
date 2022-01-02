import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'exercises/python')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.ipynb$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const notebook = JSON.parse(fileContents)

    // Extract title and subtitle
    const title = notebook.metadata.title
    const subtitle = notebook.metadata.subtitle

    // Combine the data with the id
    return {
      id,
      title,
      subtitle
    }
  })
  // Sort posts by Id
  return allPostsData.sort((a, b) => {
    if (a.id < b.id) {
      return -1
    } else {
      return 1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.ipynb$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.ipynb`)

  // Convert file to string
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const notebook = JSON.parse(fileContents)

  // Extract title and subtitle
  const title = notebook.metadata.title
  const subtitle = notebook.metadata.subtitle

  // Combine the data with the id
  return {
    id,
    notebook,
    fileContents,
    title,
    subtitle
  }
}
