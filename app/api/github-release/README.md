# GitHub Release API

API endpoint لجلب آخر إصدار APK من GitHub Releases تلقائياً.

## 📍 Endpoint

```
GET /api/github-release?repo={owner}/{repo}
```

## 🔧 Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `repo` | string | ✅ Yes | GitHub repository path (e.g., `tariqsaidofficial/nfcManager`) |

## 📤 Response

### Success (200)
```json
{
  "version": "v1.0.0",
  "name": "NFC Manager v1.0.0",
  "apk": {
    "url": "https://github.com/tariqsaidofficial/nfcManager/releases/download/v1.0.0/app-release.apk",
    "name": "app-release.apk",
    "size": 5242880,
    "sizeFormatted": "5.00 MB"
  }
}
```

### Error (404)
```json
{
  "error": "No releases found for this repository"
}
```

```json
{
  "error": "No APK file found in the latest release"
}
```

### Error (400)
```json
{
  "error": "Repository parameter is required"
}
```

## 🔑 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GITHUB_TOKEN` | Optional | GitHub Personal Access Token for higher rate limits (5000/hour vs 60/hour) |

## 📝 Usage Example

### JavaScript/TypeScript
```typescript
const response = await fetch('/api/github-release?repo=tariqsaidofficial/nfcManager')
const data = await response.json()

if (response.ok) {
  console.log('Latest version:', data.version)
  console.log('Download URL:', data.apk.url)
  console.log('File size:', data.apk.sizeFormatted)
}
```

### cURL
```bash
curl "https://portfolio.dxbmark.com/api/github-release?repo=tariqsaidofficial/nfcManager"
```

## ⚡ Features

- ✅ Automatic caching (1 hour)
- ✅ Rate limit handling
- ✅ APK file detection
- ✅ Size formatting
- ✅ Error handling

## 🔒 Security

- Uses GitHub API v3
- Supports authenticated requests with `GITHUB_TOKEN`
- No sensitive data exposed
- CORS enabled

## 📊 Rate Limits

| Type | Limit | Reset |
|------|-------|-------|
| Without token | 60 requests/hour | Per IP |
| With token | 5,000 requests/hour | Per token |

## 🚀 Deployment

### Cloudflare Pages
1. Add `GITHUB_TOKEN` in Environment Variables
2. Deploy the project
3. API will be available at `/api/github-release`

### Local Development
1. Create `.env.local`:
   ```env
   GITHUB_TOKEN=ghp_your_token_here
   ```
2. Run `npm run dev`
3. Test at `http://localhost:3000/api/github-release?repo=tariqsaidofficial/nfcManager`

## 📚 Related Files

- `/data/projects.ts` - Project configuration with `apkUrl: "dynamic"`
- `/components/projects.tsx` - Frontend component that uses this API
- `/docs/GITHUB_TOKEN_SETUP.md` - Detailed setup guide

## 🐛 Troubleshooting

### Issue: Rate limit exceeded
**Solution:** Add `GITHUB_TOKEN` environment variable

### Issue: No releases found
**Solution:** Create a release in GitHub with an APK file

### Issue: API returns 500
**Solution:** Check Cloudflare Pages logs for detailed error

## 📖 Documentation

For complete setup instructions, see: `/docs/GITHUB_TOKEN_SETUP.md`
