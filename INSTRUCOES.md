# 🎉 Instruções Rápidas - Convite Olivia

## ⚡ Próximos Passos

### 1️⃣ Gerar os Arquivos de Áudio

Uma página foi aberta no seu navegador (`generate-audio.html`). Siga estes passos:

1. **Clique no botão "✨ Gerar Todos"**
2. O navegador vai baixar 3 arquivos WAV automaticamente:
   - `click.wav`
   - `open.wav`
   - `background.wav`
3. **Mova esses 3 arquivos** para a pasta do projeto (`Convite Olivia`)

> 💡 **Dica**: Os arquivos serão baixados na sua pasta de Downloads. Basta arrastá-los para a pasta do projeto.

### 2️⃣ Testar o Convite

Depois de adicionar os arquivos de áudio, você pode testar o convite:

**Opção A - Abrir diretamente:**
```
Clique duas vezes no arquivo index.html
```

**Opção B - Usar servidor local (recomendado para PWA):**
```bash
# No terminal, dentro da pasta do projeto:
python -m http.server 8000
```
Depois abra: `http://localhost:8000`

### 3️⃣ Testar no Celular

1. Hospede o projeto em um serviço gratuito:
   - **Netlify**: Arraste a pasta para [netlify.com/drop](https://app.netlify.com/drop)
   - **Vercel**: Use o [vercel.com](https://vercel.com)
   
2. Abra o link no celular
3. Adicione à tela inicial:
   - **Android**: Menu (⋮) → "Adicionar à tela inicial"
   - **iOS**: Compartilhar → "Adicionar à Tela de Início"

## 🎨 Personalização Rápida

### Mudar as cores:
Edite `index.html`, linha 23:
```css
background: linear-gradient(135deg, #fbdbeb 0%, #ffc9e3 100%);
```

### Mudar o texto:
Edite `index.html`, linha 211:
```html
<div class="instrucao" id="instrucao">👆 Toque no envelope!</div>
```

### Substituir áudios:
Substitua os arquivos `.wav` por seus próprios arquivos de áudio (MP3 ou WAV).

## 📱 Estrutura Final do Projeto

```
Convite Olivia/
├── index.html              ✅ Pronto
├── manifest.json           ✅ Pronto
├── sw.js                   ✅ Pronto
├── icone.png              ✅ Pronto
├── envelope.jpg           ✅ Pronto
├── convite.jpg            ✅ Pronto
├── click.wav              ⚠️ GERAR AGORA
├── open.wav               ⚠️ GERAR AGORA
├── background.wav         ⚠️ GERAR AGORA
├── generate-audio.html    ✅ Ferramenta auxiliar
├── README.md              ✅ Documentação completa
└── INSTRUCOES.md          ✅ Este arquivo
```

## ❓ Problemas Comuns

### Os áudios não tocam
- Alguns navegadores bloqueiam autoplay. O usuário precisa interagir primeiro.
- Verifique se os arquivos de áudio estão na pasta correta.

### O PWA não instala
- Certifique-se de estar usando HTTPS ou localhost.
- Verifique se o Service Worker foi registrado (abra o Console do navegador).

### As imagens não aparecem
- Verifique se os arquivos `envelope.jpg` e `convite.jpg` estão na pasta.
- Abra o Console do navegador para ver erros.

## 🚀 Pronto!

Após gerar os arquivos de áudio, seu convite estará 100% funcional!

Para mais detalhes, consulte o arquivo `README.md`.
