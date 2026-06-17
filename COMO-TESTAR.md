# 🚀 Como Testar o Convite Corretamente

## ⚠️ Problema: Abrir arquivo diretamente não funciona

Os erros que você está vendo acontecem porque navegadores bloqueiam recursos locais (áudio, PWA, etc.) quando você abre arquivos HTML diretamente (`file://`).

## ✅ Solução: Use um servidor local

### **Opção 1: Python (Mais Fácil)** ⭐

Se você tem Python instalado:

```bash
# Abra o terminal na pasta do projeto e execute:
python -m http.server 8000
```

Depois abra no navegador: **http://localhost:8000**

---

### **Opção 2: Node.js (npx)**

Se você tem Node.js instalado:

```bash
# Abra o terminal na pasta do projeto e execute:
npx serve
```

Depois abra o link que aparecer (geralmente http://localhost:3000)

---

### **Opção 3: VS Code Live Server** 🎯

1. Instale a extensão **"Live Server"** no VS Code
2. Clique com botão direito no arquivo `index.html`
3. Selecione **"Open with Live Server"**
4. O navegador abrirá automaticamente

---

### **Opção 4: Navegador Chrome/Edge**

```bash
# Windows (CMD):
cd "C:\Users\zxzxc\Convite Olivia"
start chrome --allow-file-access-from-files index.html

# Ou Edge:
start msedge --allow-file-access-from-files index.html
```

⚠️ **Nota**: Esta opção não é recomendada para produção, apenas para testes rápidos.

---

## 📝 Checklist Antes de Testar

Certifique-se de que você tem estes arquivos na pasta:

```
✅ index.html
✅ manifest.json
✅ sw.js
✅ icone.png
✅ envelope.jpg
✅ convite.jpg
⚠️ background.wav (GERAR)
⚠️ open.wav (GERAR)
⚠️ click.wav (GERAR)
```

### Como gerar os arquivos de áudio:

1. Abra o arquivo `generate-audio.html` no navegador
2. Clique em "✨ Gerar Todos"
3. Mova os 3 arquivos `.wav` da pasta Downloads para a pasta do projeto

---

## 🎉 Depois de Configurar

Com o servidor rodando, você terá:

✅ Áudios funcionando
✅ PWA instalável
✅ Service Worker ativo
✅ Sem erros de CORS
✅ Todas as funcionalidades operacionais

---

## 🌐 Para Compartilhar com Convidados

Hospede gratuitamente em:

1. **Netlify** (mais fácil):
   - Acesse: https://app.netlify.com/drop
   - Arraste a pasta do projeto
   - Pronto! Link gerado automaticamente

2. **Vercel**:
   - Acesse: https://vercel.com
   - Faça upload do projeto
   - Deploy automático

3. **GitHub Pages**:
   - Crie um repositório no GitHub
   - Faça upload dos arquivos
   - Ative GitHub Pages nas configurações

---

## ❓ Dúvidas Comuns

**P: Por que não funciona abrindo direto?**
R: Navegadores bloqueiam recursos locais por segurança (CORS policy).

**P: Preciso instalar Python?**
R: Não necessariamente. Use qualquer uma das opções acima.

**P: Como sei se está funcionando?**
R: Você verá a URL começando com `http://localhost` e não terá erros no console.

**P: Os áudios são obrigatórios?**
R: Não, mas sem eles você não terá sons. O resto funciona normalmente.
