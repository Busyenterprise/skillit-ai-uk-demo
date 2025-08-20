# SKILLIT-AI Platform

Revolutionary AI-powered recruitment platform with live talent auctions, intelligent matching, and automated interviews.

## Features

- 🤖 **AI-Powered Matching**: Advanced algorithms for perfect candidate-job matching
- 🎯 **Live Talent Auctions**: Real-time bidding system for top candidates
- 🎥 **AI Video Interviews**: Automated candidate assessment and scoring
- 📊 **Advanced Analytics**: Comprehensive hiring metrics and insights
- 🔍 **Smart Candidate Pools**: Pre-vetted, AI-scored talent database
- ⚡ **Instant Hiring**: Streamlined process from posting to hiring

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/skillit-ai-platform.git
cd skillit-ai-platform
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
pnpm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                    # Next.js 14 App Router
│   ├── demo/              # Interactive platform demos
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── demo/              # Demo components
│   ├── layout/            # Layout components
│   └── ui/                # UI components (shadcn/ui)
├── lib/                   # Utility functions
└── public/                # Static assets
\`\`\`

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **TypeScript**: Full type safety

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## Environment Variables

See `.env.local.example` for all available configuration options.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email hello@skillit-ai.com or join our Slack channel.

## Roadmap

- [ ] Multi-language support
- [ ] Mobile app development
- [ ] Advanced AI interview features
- [ ] Integration with major ATS systems
- [ ] Real-time collaboration tools

---

Built with ❤️ by the SKILLIT-AI team
