"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  saveProject,
  deleteProject,
  saveArticle,
  deleteArticle,
  saveSkills,
  getSkills,
} from "@/lib/db";
import { Project, BlogPost, SkillCategory } from "@/lib/types";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const AUTH_COOKIE = "admin_session";

export async function login(formData: FormData) {
  const password = formData.get("password") as string;

  if (password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set(AUTH_COOKIE, "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    redirect("/dashboard");
  } else {
    return { error: "Invalid password" };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);
  redirect("/dashboard/login");
}

export async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.has(AUTH_COOKIE);
}

// Projects
export async function createProjectAction(formData: FormData) {
  const isAuth = await checkAuth();
  if (!isAuth) throw new Error("Unauthorized");

  const techString = formData.get("tech") as string;
  const screenshotsString = formData.get("screenshots") as string;

  const project: Project = {
    slug: formData.get("slug") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    longDescription: formData.get("longDescription") as string,
    icon: formData.get("icon") as string,
    link: formData.get("link") as string,
    tech: techString
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    screenshots: screenshotsString
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    role: formData.get("role") as string,
    year: parseInt(formData.get("year") as string),
    for: formData.get("for") as string,
  };

  await saveProject(project);
  redirect("/dashboard/projects");
}

export async function updateProjectAction(formData: FormData) {
  const isAuth = await checkAuth();
  if (!isAuth) throw new Error("Unauthorized");

  const techString = formData.get("tech") as string;
  const screenshotsString = formData.get("screenshots") as string;

  const project: Project = {
    slug: formData.get("slug") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    longDescription: formData.get("longDescription") as string,
    icon: formData.get("icon") as string,
    link: formData.get("link") as string,
    tech: techString
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    screenshots: screenshotsString
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    role: formData.get("role") as string,
    year: parseInt(formData.get("year") as string),
    for: formData.get("for") as string,
  };

  await saveProject(project);
  redirect("/dashboard/projects");
}

export async function deleteProjectAction(slug: string) {
  const isAuth = await checkAuth();
  if (!isAuth) throw new Error("Unauthorized");

  await deleteProject(slug);
  redirect("/dashboard/projects");
}

// Articles
export async function createArticleAction(formData: FormData) {
  const isAuth = await checkAuth();
  if (!isAuth) throw new Error("Unauthorized");

  const article: BlogPost = {
    slug: formData.get("slug") as string,
    title: formData.get("title") as string,
    date: formData.get("date") as string,
    views: "0", // Default views
    excerpt: formData.get("excerpt") as string,
    category: formData.get("category") as string,
    content: formData.get("content") as string,
  };

  await saveArticle(article);
  redirect("/dashboard/articles");
}

export async function updateArticleAction(formData: FormData) {
  const isAuth = await checkAuth();
  if (!isAuth) throw new Error("Unauthorized");

  const article: BlogPost = {
    slug: formData.get("slug") as string,
    title: formData.get("title") as string,
    date: formData.get("date") as string,
    views: formData.get("views") as string,
    excerpt: formData.get("excerpt") as string,
    category: formData.get("category") as string,
    content: formData.get("content") as string,
  };

  await saveArticle(article);
  redirect("/dashboard/articles");
}

export async function deleteArticleAction(slug: string) {
  const isAuth = await checkAuth();
  if (!isAuth) throw new Error("Unauthorized");

  await deleteArticle(slug);
  redirect("/dashboard/articles");
}

// Skills
// For skills, we might receive a JSON string or handle it differently.
// Let's assume we pass the whole skills array as a JSON string for now for simplicity,
// or we can have a form that updates one category.
// Let's go with updating all skills at once for now as it's a nested structure.
export async function updateSkillsAction(jsonSkills: string) {
  const isAuth = await checkAuth();
  if (!isAuth) throw new Error("Unauthorized");

  try {
    const skills: SkillCategory[] = JSON.parse(jsonSkills);
    await saveSkills(skills);
  } catch (e) {
    throw new Error("Invalid JSON");
  }
  redirect("/dashboard/skills");
}
