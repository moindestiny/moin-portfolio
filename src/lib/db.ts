import fs from 'fs/promises';
import path from 'path';
import { Project, BlogPost, SkillCategory } from './types';

const DB_PATH = path.join(process.cwd(), 'src', 'data', 'db.json');

interface Database {
  projects: Project[];
  skills: SkillCategory[];
  articles: BlogPost[];
}

async function getDB(): Promise<Database> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading DB:', error);
    return { projects: [], skills: [], articles: [] };
  }
}

async function saveDB(db: Database) {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing DB:', error);
  }
}

// Projects
export async function getProjects(): Promise<Project[]> {
  const db = await getDB();
  return db.projects;
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const db = await getDB();
  return db.projects.find((p) => p.slug === slug);
}

export async function saveProject(project: Project) {
  const db = await getDB();
  const index = db.projects.findIndex((p) => p.slug === project.slug);
  if (index >= 0) {
    db.projects[index] = project;
  } else {
    db.projects.push(project);
  }
  await saveDB(db);
}

export async function deleteProject(slug: string) {
  const db = await getDB();
  db.projects = db.projects.filter((p) => p.slug !== slug);
  await saveDB(db);
}

// Skills
export async function getSkills(): Promise<SkillCategory[]> {
  const db = await getDB();
  return db.skills;
}

export async function saveSkills(skills: SkillCategory[]) {
  const db = await getDB();
  db.skills = skills;
  await saveDB(db);
}

// Articles
export async function getArticles(): Promise<BlogPost[]> {
  const db = await getDB();
  return db.articles;
}

export async function getArticle(slug: string): Promise<BlogPost | undefined> {
  const db = await getDB();
  return db.articles.find((a) => a.slug === slug);
}

export async function saveArticle(article: BlogPost) {
  const db = await getDB();
  const index = db.articles.findIndex((a) => a.slug === article.slug);
  if (index >= 0) {
    db.articles[index] = article;
  } else {
    db.articles.push(article);
  }
  await saveDB(db);
}

export async function deleteArticle(slug: string) {
  const db = await getDB();
  db.articles = db.articles.filter((a) => a.slug !== slug);
  await saveDB(db);
}
