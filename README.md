# @nebulaai/core ⚡

> The rock-solid foundation powering every NebulaAI package

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Bundle Size](https://img.shields.io/badge/size-12kb-brightgreen)

</div>

## 🌟 What's This?

NebulaAI Core is like the **Swiss Army knife** for building business tools. It gives you all the boring-but-essential stuff so you can focus on the fun parts.

```typescript
// Instead of writing this yourself...
const id = `business-${Date.now()}-${Math.random().toString(36)}`;

// Just do this!
import { generateId } from '@nebulaai/core';
const id = generateId('business'); // ✨ Perfect every time
```

---

## 🎯 Perfect For

| 👨‍💻 **Developers** | 🏢 **Teams** | 🚀 **Startups** |
|-------------------|-------------|----------------|
| Building on NebulaAI | Need consistent APIs | Want to move fast |
| Skip the boilerplate | Enterprise reliability | Focus on features |
| Type-safe everything | Predictable patterns | Proven foundation |

---

## 🚀 Get Started in 30 Seconds

```bash
npm install @nebulaai/core
```

```typescript
import { generateId, validateVibe, formatCurrency } from '@nebulaai/core';

// ✅ Generate unique IDs
const businessId = generateId('biz');  // "biz-1703123456-x8k2m9"

// ✅ Validate industries  
validateVibe('fintech');  // true ✨
validateVibe('banana');   // false ❌

// ✅ Format money nicely
formatCurrency(1299.99);  // "$1,299.99" 💰
```

**That's it!** You're now using enterprise-grade utilities.

---

## 🎨 The Good Stuff

### 🔧 **Smart Utilities**
```typescript
// Random picks (safely!)
getRandomElement(['red', 'blue', 'green']);

// Clean user input
sanitizeInput('My Business!@#$');  // "My Business"

// URL-friendly names
normalizeString('Cool App Name');   // "cool-app-name"
```

### 🏷️ **Perfect Types**
```typescript
interface BaseResult {
  id: string;           // Always unique
  name: string;         // Business name
  tagline: string;      // Catchy description  
  domain: string;       // Website address
  domainStatus: 'available' | 'premium' | 'taken';
  vibe: string;         // Industry type
}
```

### ⚡ **Rate Limiting Made Easy**
```typescript
const limiter = new RateLimiter(100, 60000); // 100 per minute

if (limiter.canMakeRequest()) {
  await callAPI();  // ✅ Good to go!
} else {
  // ⏳ Wait a bit...
}
```

### 🛡️ **Smart Errors**
```typescript
try {
  // Your code here
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Oops! Check your input');
  } else if (error instanceof APIError) {
    console.log('Server hiccup, try again');
  }
}
```

---

## 🌈 Industries We Support

<table>
<tr>
<td align="center">🤖<br><b>AI-Powered</b><br><small>ML, automation</small></td>
<td align="center">💰<br><b>Fintech</b><br><small>payments, crypto</small></td>
<td align="center">☁️<br><b>SaaS</b><br><small>software tools</small></td>
<td align="center">🔗<br><b>Web3</b><br><small>blockchain, DeFi</small></td>
</tr>
<tr>
<td align="center">🛒<br><b>E-commerce</b><br><small>online stores</small></td>
<td align="center">👥<br><b>Social</b><br><small>communities</small></td>
<td align="center">🎨<br><b>Creative</b><br><small>design, media</small></td>
<td align="center">✨<br><b>More Coming</b><br><small>suggest one!</small></td>
</tr>
</table>

---

## 🍕 Quick Recipes

### 🆔 **Generate Perfect IDs**
```typescript
generateId();           // "item-1703123456-abc123"
generateId('user');     // "user-1703123456-def456"  
generateId('order');    // "order-1703123456-ghi789"
```

### 🎲 **Safe Random Selection**
```typescript
const colors = ['red', 'blue', 'green'];
const color = getRandomElement(colors);  // Never crashes!

// Works with any array
const names = getRandomElement(['Alex', 'Sam', 'Jordan']);
const numbers = getRandomElement([1, 2, 3, 4, 5]);
```

### 🧹 **Clean Up User Input**
```typescript
sanitizeInput('My Café!@#$');     // "My Caf"
normalizeString('My Café');       // "my-cafe"
capitalizeFirst('hello world');   // "Hello world"
```

### 💵 **Format Like a Pro**
```typescript
formatCurrency(1299.99);          // "$1,299.99"
formatCurrency(999, 'EUR');       // "€999.00"
formatPercentage(85.7);           // "85.7%"
```

### ✅ **Validate Everything**
```typescript
isValidEmail('test@example.com');  // true
isValidUrl('https://google.com');  // true
validateVibe('fintech');           // true
```

---

## 🎪 Advanced Tricks

### 🏃‍♂️ **Build a Rate-Limited Service**
```typescript
class SmartAPI {
  private limiter = new RateLimiter(50, 60000);

  async call(endpoint: string) {
    // Wait if needed
    if (!this.limiter.canMakeRequest()) {
      const wait = this.limiter.getTimeUntilNextRequest();
      await new Promise(r => setTimeout(r, wait));
    }

    return fetch(endpoint);
  }
}
```

### 🎯 **Type-Safe Industry Handler**
```typescript
function handleIndustry(input: string) {
  if (validateVibe(input)) {
    // TypeScript knows this is safe now!
    console.log(`Processing ${input} industry`);
    return input;  // Guaranteed to be IndustryType
  }

  throw new ValidationError('Unknown industry');
}
```

---

## 🏗️ What Makes It Special

| ✨ **Feature** | 🎯 **Benefit** | 💡 **Example** |
|----------------|----------------|-----------------|
| **Type Safety** | Catch errors early | `validateVibe()` prevents typos |
| **Rate Limiting** | Don't break APIs | Built-in request throttling |
| **Consistent IDs** | No collisions | Timestamp + random = unique |
| **Smart Validation** | Clean user input | Remove dangerous characters |
| **Error Boundaries** | Clear error types | Know exactly what went wrong |

---

## 🎁 What You Get

```typescript
// 🔧 20+ utility functions
import { generateId, sanitizeInput, formatCurrency } from '@nebulaai/core';

// 🏷️ Complete TypeScript types  
import type { BaseResult, GenerationOptions, AIScores } from '@nebulaai/core';

// 🛡️ Smart error handling
import { ValidationError, APIError } from '@nebulaai/core';

// ⚡ Rate limiting
import { RateLimiter } from '@nebulaai/core';

// ⚙️ Ready-to-use config
import { DEFAULT_CONFIG } from '@nebulaai/core';
```

---

## 🚦 Simple Example

```typescript
import { 
  generateId, 
  validateVibe, 
  sanitizeInput,
  formatCurrency,
  RateLimiter 
} from '@nebulaai/core';

// Build a business idea validator
class IdeaValidator {
  private limiter = new RateLimiter(10, 60000);

  async validate(name: string, industry: string) {
    // Rate limit
    if (!this.limiter.canMakeRequest()) {
      throw new Error('Slow down! Try again in a minute.');
    }

    // Clean input
    const cleanName = sanitizeInput(name);

    // Validate industry
    if (!validateVibe(industry)) {
      throw new ValidationError('Unknown industry type');
    }

    // Generate result
    return {
      id: generateId('idea'),
      name: cleanName,
      industry,
      estimatedCost: formatCurrency(5000),
      valid: true
    };
  }
}

const validator = new IdeaValidator();
const result = await validator.validate('My Cool App', 'saas');
console.log(result);
// {
//   id: "idea-1703123456-abc123",
//   name: "My Cool App", 
//   industry: "saas",
//   estimatedCost: "$5,000.00",
//   valid: true
// }
```

---

## 🔗 Plays Well With

- **[@nebulaai/beginner-toolkit](https://npmjs.com/package/@nebulaai/beginner-toolkit)** → Super simple business tools
- **[@nebulaai/name-generator](https://npmjs.com/package/@nebulaai/name-generator)** → AI-powered naming
- **[@nebulaai/brand-analyzer](https://npmjs.com/package/@nebulaai/brand-analyzer)** → Brand insights

---

## 🤝 Contributing

Love this package? Here's how to help:

1. **🐛 Found a bug?** → Open an issue
2. **💡 Have an idea?** → Start a discussion  
3. **🔧 Want to code?** → Fork and PR
4. **📖 Improve docs?** → Every typo fix helps!

---

## 📜 License

MIT © NebulaAI Team

---

<div align="center">

**Built with ❤️ for developers who want to move fast**

[📚 Docs](https://docs.nebulaai.com) • [🐛 Issues](https://github.com/nebulaai/core/issues) • [💬 Discord](https://discord.gg/temporal.ai)

</div>
