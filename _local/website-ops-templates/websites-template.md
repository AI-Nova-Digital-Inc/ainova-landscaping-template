# ThinkWithOps Website Template Deployment Guide

## Goal

Use this structure for all demo templates and real client websites.

Professional rule:

1 unique website = 1 GitHub repo = 1 Vercel project = 1 domain/subdomain

---

# Recommended Structure

## Example Demo Templates

GitHub repos:

- construction-demo-titanridge
- construction-demo-ironclad
- plumbing-demo-hydroforce
- hvac-demo-climacore
- roofing-demo-skyshield
- cleaning-demo-puregleam
- thinkwithops-main

Vercel projects:

- construction-demo-titanridge
- construction-demo-ironclad
- plumbing-demo-hydroforce
- hvac-demo-climacore
- roofing-demo-skyshield
- cleaning-demo-puregleam
- thinkwithops-main

---

# Important Rule

Do NOT put multiple company websites into one Vercel project.

❌ Bad:

construction-project
├── company1 website
├── company2 website

✅ Good:

company1-construction
→ GitHub repo
→ Vercel project
→ domain

company2-construction
→ GitHub repo
→ Vercel project
→ domain

---

# For Templates / Demo Websites

Each template should have its own repo and Vercel project.

Example:

plumbing-demo-hydroforce
→ GitHub repo: plumbing-demo-hydroforce
→ Vercel project: plumbing-demo-hydroforce
→ URL: plumbing-demo-hydroforce.vercel.app

roofing-demo-skyshield
→ GitHub repo: roofing-demo-skyshield
→ Vercel project: roofing-demo-skyshield
→ URL: roofing-demo-skyshield.vercel.app

---

# For Real Clients

For each client:

Client: Company1

GitHub repo:
company1-website

Vercel project:
company1-website

Domain:
company1.com

Workflow:

Code in GitHub
↓
Deploy in Vercel
↓
Connect client domain
↓
Future changes auto-deploy from GitHub

---

# GitHub Setup

## Step 1: Create a new GitHub repo

Repo naming examples:

- hydroforce-plumbing-demo
- climacore-hvac-demo
- company1-website
- company2-roofing

Recommended settings:

- Public repo for demos
- Private repo for real clients if needed

---

## Step 2: Push code to GitHub

From your project folder:

```bash
git init
git add .
git commit -m "Initial website build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

---

# GitHub Pages Setting

For these websites, GitHub Pages should usually be OFF.

Why?

GitHub = code storage
Vercel = deployment/hosting

Do not use GitHub Pages unless you are deploying a simple static HTML/CSS/JS site.

For Next.js, React, 3D animated websites, or client websites, use Vercel.

---

# How to Disable GitHub Pages

In GitHub repo:

1. Open the repo
2. Go to Settings
3. Go to Pages
4. If a site is published, choose Unpublish site
5. Make sure no branch is selected for GitHub Pages publishing

Result:

GitHub Pages OFF
Vercel deployment ON

---

# Vercel Setup

## Step 1: Import GitHub Repo

1. Go to Vercel
2. Click Add New Project
3. Import the GitHub repo
4. Vercel will detect the framework automatically
5. Click Deploy

Vercel supports automatic deployments from GitHub when you push changes.

---

# Build Settings

For Next.js:

Framework:
Next.js

Build command:
npm run build

Output:
Vercel auto-detects this

Install command:
npm install

---

# Updating Website

Whenever you update code:

```bash
git add .
git commit -m "Update website content"
git push
```

Vercel automatically redeploys.

---

# Custom Domain Setup

If the client owns a domain in Hostinger, GoDaddy, Namecheap, etc., connect it to the correct Vercel project.

In Vercel:

1. Open project
2. Go to Settings
3. Go to Domains
4. Add domain:
   company1.com

Vercel will show required DNS records.

Common records:

For root domain:

Type: A
Name: @
Value: 76.76.21.21

For www:

Type: CNAME
Name: www
Value: cname.vercel-dns.com

---

# Client Domain Example

Client domain:

company1.com

DNS in Hostinger:

A record:
@ → 76.76.21.21

CNAME record:
www → cname.vercel-dns.com

Then in Vercel:

Add both:

company1.com
www.company1.com

Set primary domain:

company1.com

Enable redirect:

www.company1.com → company1.com

---

# Demo Showcase Strategy

Do NOT put all demo websites on one page only.

Use two layers:

## Layer 1: Main showcase site

Example:

thinkwithops.com

Sections:

- Plumbing demos
- Roofing demos
- HVAC demos
- Cleaning demos
- Construction demos
- Landscaping demos

Each card has:

- Screenshot
- Short description
- Button: View Live Demo

## Layer 2: Separate demo websites

Each demo opens as its own full website.

Examples:

hydroforce-plumbing.vercel.app
climacore-hvac.vercel.app
roofmax-contractors.vercel.app

---

# Best Rule for Demos

1 unique design = 1 repo = 1 Vercel project

If construction has 2 different designs:

construction-demo-1
→ repo
→ Vercel project

construction-demo-2
→ repo
→ Vercel project

---

# Template to Client Workflow

Example:

You have:

plumbing-template-hydroforce

Client wants plumbing website.

Steps:

1. Clone the template repo
2. Rename project to client name
3. Replace:
   - Company name
   - Logo
   - Phone number
   - Address
   - Services
   - Images
   - Testimonials
   - Contact form details
4. Push to new client GitHub repo
5. Create new Vercel project
6. Connect client domain

Example:

plumbing-template-hydroforce
↓ clone
abc-plumbing-website
↓ deploy
abcplumbing.com

---

# Recommended Naming Convention

## Demo repos

niche-demo-brandname

Examples:

plumbing-demo-hydroforce
roofing-demo-skyshield
hvac-demo-climacore

## Client repos

clientname-website

Examples:

abcplumbing-website
elitehvac-website
northstarroofing-website

## Vercel projects

Use the same name as GitHub repo.

---

# What To Deploy First

Do not deploy every template immediately.

Start with best 5–8:

1. ThinkWithOps main brand site
2. AI/DevOps portfolio
3. Plumbing demo
4. HVAC demo
5. Roofing demo
6. Construction demo
7. Cleaning demo
8. Landscaping demo

---

# Free Vercel Usage

Vercel can host many projects, but free plan should be used carefully.

Use free plan for:

- demos
- portfolio
- early client sites
- low traffic websites

Upgrade later when:

- you get paying clients
- traffic increases
- you want more professional reliability

---

# Final Agency Rule

For demos:

1 demo website = 1 repo = 1 Vercel project

For clients:

1 client website = 1 repo = 1 Vercel project = 1 domain

For GitHub Pages:

Keep it disabled unless the site is simple static HTML/CSS/JS.

For high-end React/Next.js/3D websites:

Use Vercel.

---

GitHub Repos
├── construction-template
├── plumbing-template
├── hvac-template
├── roofing-template
└── cleaning-template

Vercel Projects
├── construction-template-demo
├── plumbing-template-demo
├── hvac-template-demo
├── roofing-template-demo
└── cleaning-template-demo

---