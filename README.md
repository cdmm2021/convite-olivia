# Convite Interativo PWA - Olivia (1 Ano)

## 📱 Sobre o Projeto

Este é um convite de aniversário digital interativo em formato de Progressive Web App (PWA). O convite simula a abertura de um envelope com animações suaves, efeitos sonoros e confetes animados.

## ✨ Funcionalidades

- 🎨 **Animação de abertura do envelope** - Toque no envelope para revelar o convite
- 🎵 **Música de fundo** - Controle de áudio com botão liga/desliga
- 🔊 **Efeitos sonoros** - Sons ao abrir o envelope e clicar no convite
- 🎊 **Confetes animados** - Efeito visual de celebração ao abrir
- 📱 **PWA Instalável** - Pode ser instalado na tela inicial do celular
- 💾 **Funciona offline** - Service Worker cacheia todos os recursos

## 🎵 Arquivos de Áudio Necessários

Para o funcionamento completo, você precisa adicionar 3 arquivos de áudio MP3:

1. **background.mp3** - Música de fundo (loop contínuo)
2. **open.mp3** - Som ao abrir o envelope
3. **click.mp3** - Som ao clicar nos elementos

### Onde encontrar áudios gratuitos:

- [Pixabay](https://pixabay.com/music/) - Músicas e efeitos sonoros gratuitos
- [Freesound](https://freesound.org/) - Biblioteca de sons gratuitos
- [YouTube Audio Library](https://www.youtube.com/audiolibrary) - Músicas sem copyright

### Sugestões de busca:

- **background.mp3**: "happy birthday music", "celebration music", "kids party music"
- **open.mp3**: "envelope open", "paper rustle", "whoosh"
- **click.mp3**: "button click", "pop sound", "tap sound"

## 📂 Estrutura de Arquivos

```
Convite Olivia/
├── index.html          # Página principal com HTML/CSS/JS
├── manifest.json       # Configuração do PWA
├── sw.js              # Service Worker para cache
├── icone.png          # Ícone do PWA (512x512)
├── envelope.jpg       # Imagem do envelope
├── convite.jpg        # Imagem do convite
├── background.mp3     # ⚠️ ADICIONAR - Música de fundo
├── open.mp3           # ⚠️ ADICIONAR - Som de abertura
└── click.mp3          # ⚠️ ADICIONAR - Som de clique
```

## 🚀 Como Usar

### 1. Adicionar os arquivos de áudio

Baixe ou crie os 3 arquivos MP3 mencionados acima e coloque-os na pasta do projeto.

### 2. Testar localmente

Você pode abrir o arquivo `index.html` diretamente no navegador, mas para testar o PWA completo, é recomendado usar um servidor local:

**Opção 1 - Python:**
```bash
python -m http.server 8000
```

**Opção 2 - Node.js (npx):**
```bash
npx serve
```

**Opção 3 - VS Code:**
Use a extensão "Live Server" e clique com botão direito em `index.html` > "Open with Live Server"

### 3. Instalar como PWA no celular

1. Abra o convite no navegador do celular
2. No Chrome/Edge: Toque no menu (⋮) > "Adicionar à tela inicial"
3. No Safari (iOS): Toque em compartilhar > "Adicionar à Tela de Início"

## 🎨 Personalização

### Cores do tema

Edite as cores no arquivo `index.html` (seção `<style>`):

```css
background: linear-gradient(135deg, #fbdbeb 0%, #ffc9e3 100%);
```

### Textos

Altere o texto da instrução:

```html
<div class="instrucao" id="instrucao">👆 Toque no envelope!</div>
```

### Animações

Ajuste a velocidade das animações modificando os valores de `transition` e `animation-duration` no CSS.

## 🌐 Hospedagem

Para compartilhar o convite, você pode hospedá-lo gratuitamente em:

- **Netlify** - Arraste a pasta e solte no site
- **Vercel** - Deploy automático via GitHub
- **GitHub Pages** - Hospedagem gratuita para repositórios públicos
- **Cloudflare Pages** - Deploy rápido e CDN global

## 📝 Notas Importantes

- Os arquivos de áudio devem estar em formato MP3 para melhor compatibilidade
- O Service Worker só funciona em HTTPS ou localhost
- Alguns navegadores bloqueiam autoplay de áudio - o usuário precisa interagir primeiro
- Teste em diferentes dispositivos para garantir compatibilidade

## 🎉 Pronto!

Após adicionar os arquivos de áudio, seu convite interativo estará completo e pronto para ser compartilhado!
