import { PrismaClient } from "@prisma/client";
import IssueDetail from "./IssueDetails";

async function IssueDetailsPage({ params }) {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findFirst({
    where: { id: +params.issueId },
  });
  
  return <IssueDetail issue={issue} />;
}

export default IssueDetailsPage;
