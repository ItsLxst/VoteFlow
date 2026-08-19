import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
    // first post
    await prisma.post.create({
            data: {
                title: "Dark mode support across all dashboards",
                description: "We spend a lot of time in the app, especially at night. A proper dark mode would reduce eye strain and make the product feel more polished.",
                category: "Feature",
                status: "Planned",
                votes: 284,
                tags: ["Feature"],
                authorName: "Sarah Chen",
                authorInitials: "SC"
            }
        }
    );
    // second post
    await prisma.post.create({
            data: {
                title: "Bulk export to CSV with custom field selection",
                description: "Right now exports include every column, which makes it hard to work with in Excel. Let us pick which fields to include before downloading.",
                category: "Improvement",
                status: "Under Review",
                votes: 197,
                tags: ["Improvement"],
                authorName: "Tom Archer",
                authorInitials: "TA"
            }
        }
    );
    // third post
    await prisma.post.create({
            data: {
                title: "Slack integration for real-time alerts",
                description: "Send notifications to a Slack channel when a status changes, a comment is posted, or a post reaches a vote threshold.",
                category: "Integration",
                status: "In Progress",
                votes: 156,
                tags: ["Integration"],
                authorName: "Devon Park",
                authorInitials: "DP"
            }
        }
    );
    // fourth post
    await prisma.post.create({
            data: {
                title: "Keyboard shortcut cheat sheet overlay",
                description: "A quick-access panel (press ? or Cmd+K) listing all available shortcuts. Discoverability is the problem — most users don't know they exist.",
                category: "Feature",
                status: "Planned",
                votes: 112,
                tags: ["Feature"],
                authorName: "Amara Osei",
                authorInitials: "AO"
            }
        }
    );
    // fifth post
    await prisma.post.create({
            data: {
                title: "Fix date filter resetting on page refresh",
                description: "Every time I refresh the page my date filter goes back to the default. The URL should reflect the filter state so I can share links too.",
                category: "Bug",
                status: "In Progress",
                votes: 89,
                tags: ["Bug"],
                authorName: "Felix Gruber",
                authorInitials: "FG"
            }
        }
    );
    // sixth post
    await prisma.post.create({
            data: {
                title: "Two-factor authentication via authenticator apps",
                description: "Email-only 2FA feels weak for enterprise accounts. TOTP support (Google Authenticator, Authy) would satisfy most security teams.",
                category: "Feature",
                status: "Completed",
                votes: 341,
                tags: ["Feature"],
                authorName: "Nina Bauer",
                authorInitials: "NB"
            }
        }
    );
}

main()
    .catch((error) => {
        console.error(error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });