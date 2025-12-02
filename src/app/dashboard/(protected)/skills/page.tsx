import { getSkills } from '@/lib/db';
import SkillsEditor from './SkillsEditor';

export default async function SkillsPage() {
  const skills = await getSkills();

  return <SkillsEditor initialSkills={skills} />;
}
