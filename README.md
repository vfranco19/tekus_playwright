# tekus-playwright

Automatización de pruebas E2E para Tekus con **Playwright + JavaScript + Page Object Model (POM)**.

## Tecnologías

- [Playwright](https://playwright.dev/) v1.x
- JavaScript (ES Modules)
- Page Object Model (POM)
- Reportes HTML, trazas, capturas y videos

## Estructura

```text
tekus-playwright/
├── pages/
│   ├── BasePage.js       # Métodos comunes reutilizables
│   ├── LoginPage.js      # Page Object - Login
│   └── MultimediaPage.js # Page Object - Multimedia
├── tests/
│   ├── login.spec.js      # Caso de prueba 1: Login
│   └── multimedia.spec.js # Caso de prueba 2: Multimedia
├── utils/                # Helpers y utilidades (por añadir si es necesario)
├── fixtures/             # Fixtures personalizados
├── playwright.config.js  # Configuración de Playwright
├── package.json          # Dependencias y scripts
├── .gitignore
└── README.md
```

## Casos de prueba

1. **Ingreso de usuario a plataforma**  
   Valida que con credenciales correctas (`qatester` / `N9j^u9&Hm@dz2Kcs`) se navega al inicio de la plataforma.

2. **Navegación a Multimedia y validación de contenido**  
   Navega al módulo `/screens/multimedia` y valida que existan los elementos:
   - Peso del archivo
   - Identificador único
   - Descripción
   - Previsualización

## Instalación

```bash
npm ci
npx playwright install
```

## Ejecución

```bash
# Headless
npm test

# Modo UI
npm run test:ui

# Modo headed
npm run test:headed

# Ver reporte HTML
npm run report
```

## Notas

- Configurado con `baseURL: https://qalab.invertebrado.co`
- Generación automática de trazas, capturas y videos en caso de fallo
- Soporta múltiples navegadores (configurado por proyectos)
- Arquitectura POM para facilitar mantenibilidad y reutilización

## Autor

Víctor Samuel Franco Álvarez — [GitHub](https://github.com/vfranco19)
