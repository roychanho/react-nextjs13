import { PrismaClient } from "@prisma/client";
import { wait } from "../../../util/time";
import IssueDetail from "./IssueDetails";

async function IssueDetailsPage({ params }) {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findFirst({
    where: { id: +params.issueId },
  });

  //   await wait(3);
  
  if (!issue) {
    throw new Error("Issue not found!");
  }

  return <IssueDetail issue={issue} />;
}

export default IssueDetailsPage;
