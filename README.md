# Advanced React - Context API

## 📚 Introdução

Este projeto é um exercício prático sobre a **React Context API**, uma abordagem poderosa para compartilhar estado entre componentes sem necessidade de "prop drilling".

### O que é Prop Drilling?

Prop drilling é o padrão de React de passar dados através de um grande número de componentes. Quando uma propriedade precisa ser passada através de múltiplas camadas de componentes intermediários (que não a utilizam), isso resulta em:

- Código mais inchado e difícil de entender
- Componentes intermediários sendo renderizados desnecessariamente

### Por que Context API?

React Context permite criar um estado compartilhado que qualquer componente, em qualquer área da aplicação, pode acessar e utilizar.

---

## 🎯 Objetivos de Aprendizado

Ao finalizar este projeto, você terá aprendido:

- Como React Context fornece compartilhamento de estado entre componentes
- Como criar um contexto para prover um valor a componentes filhos
- Como consumir valores de contexto usando `useContext()`
- Como atualizar valores de contexto a partir de componentes filhos
- Como estruturar provedores aninhados para o mesmo tipo de contexto

---

## 📂 Estrutura do Projeto

```
src/
├── App.jsx                    # Componente principal
├── index.jsx                  # Ponto de entrada
├── App.css                    # Estilos
├── components/
│   ├── ContactItem.jsx        # Item individual de contato
│   ├── ContactsList.jsx       # Lista de contatos
│   ├── ContactsSection.jsx    # Seção de contatos
│   └── ThemeSwitcher.jsx      # Alternador de tema
└── context/
    └── ThemeContext.js        # Context do tema
```

---

## 🚀 Instruções do Projeto

### Instrução (1): Criar e Consumir Context

**Objetivo:** Eliminar prop drilling da prop `theme`

1. **Criar o Context** em `ThemeContext.js`:
   ```javascript
   const ThemeContext = React.createContext();
   ```

2. **Envolver App com Provider** em `index.jsx`:
   - Importe `ThemeContext`
   - Envolva `<App />` com `<ThemeContext.Provider value="light">`

3. **Consumir em ContactItem**:
   - Remova a prop `theme` dos parâmetros
   - Use `const theme = useContext(ThemeContext);`
   - Remova o prop drilling em `ContactsList` e `ContactsSection`

---

### Instrução (2): Multiple Providers

**Objetivo:** Usar diferentes temas para diferentes seções

1. Em `App.jsx`, envolva cada `<ContactsSection>` com seu próprio `<ThemeContext.Provider>`
2. Defina um Provider com `value="light"` e outro com `value="dark"`

---

### Instrução (3): Provider Wrappers

**Objetivo:** Criar um componente wrapper para o Provider

1. Em `ThemeContext.js`, crie um componente `ThemeArea`:
   ```javascript
   export function ThemeArea({ children, initialTheme }) {
     return (
       <ThemeContext.Provider value={initialTheme}>
         {children}
       </ThemeContext.Provider>
     );
   }
   ```

2. Substitua os `ThemeContext.Provider` em `App.jsx` por `ThemeArea`

---

### Instrução (4): Updating Context

**Objetivo:** Permitir atualizações do estado de contexto

1. **Em `ThemeArea`**, use `useState()` para gerenciar o tema:
   ```javascript
   const [theme, setTheme] = useState(initialTheme);
   ```

2. **Passar um objeto** como valor do Provider:
   ```javascript
   <ThemeContext.Provider value={{ theme, setTheme }}>
   ```

3. **Criar `ThemeSwitcher.jsx`**:
   - Recupere `theme` e `setTheme` usando `useContext()`
   - Crie um botão que alterne entre "light" e "dark"

4. **Adicionar à `ContactsSection`**:
   - Importe e renderize `ThemeSwitcher` após a tag `<h2>`

---

### Instrução (5): Nested Providers

**Objetivo:** Implementar contextos aninhados com tema raiz

1. **Em `index.jsx`**:
   - Envolva `<App />` com `<ThemeArea initialTheme="light">`

2. **Em `App.jsx`**:
   - Importe `ThemeContext` e `useContext`
   - Recupere o tema: `const theme = useContext(ThemeContext);`
   - Aplique à div: `className={`theme-${theme}`}`
   - Importe e renderize `ThemeSwitcher` após `<h1>`

---

## 💡 Conceitos Principais

### `React.createContext()`
Cria um objeto Context que disponibiliza uma propriedade `.Provider`.

### `.Provider` Component
Componente que fornece um valor (`value`) acessível a componentes filhos.

### `useContext()` Hook
Recupera o valor fornecido pelo Provider mais próximo na árvore de componentes.

### Destructuring com Context
Quando o Context fornece um objeto:
```javascript
<ThemeContext.Provider value={{ theme, setTheme }}>

// Consumidor extrai valores
const { theme, setTheme } = useContext(ThemeContext);
```

### Nesting de Providers
Componentes podem usar o valor do Provider mais próximo na hierarquia.

---

## ⚠️ Boas Práticas

- Use Context com moderação para valores que mudam com pouca frequência
- Context não é sempre a melhor solução; considere alternativas como Redux ou `useReducer`
- Evite criar múltiplos Providers aninhados sem necessidade
- Matenha os valores de Context simples e bem definidos

---

## 🔗 Recursos Adicionais

- [React Context API - Documentação Oficial](https://react.dev/reference/react/useContext)
- [Quando usar Context](https://react.dev/learn/passing-data-deeply-with-context)
- Alternativas: Redux, `useReducer`, `zustand`

---

## ✅ Checklist do Projeto

- [ ] Context criado e exportado
- [ ] Provider envolvendo App em index.jsx
- [ ] ContactItem removido de prop drilling
- [ ] ContactsList removido de prop drilling
- [ ] ContactsSection removido de prop drilling
- [ ] Multiple Providers implementados (light/dark)
- [ ] ThemeArea wrapper criado
- [ ] useState() implementado em ThemeArea
- [ ] ThemeSwitcher criado e funcionando
- [ ] Nested Providers configurados
- [ ] Tema aplicado ao className da div principal

---

## 📝 Notas

- Começa com **prop drilling simples**
- Evoluir para **Context com Provider**
- Implementar **múltiplos Providers**
- Adicionar **estado reativo** com `useState()`
- Finalizar com **contextos aninhados**

---

**Desenvolvido como material educacional para aprender React Context API.**
