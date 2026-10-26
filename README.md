# VÉRTICE Auto Detail

Landing page demonstrativa para uma empresa fictícia de estética automotiva premium. O projeto usa HTML, CSS e JavaScript puros, sem etapa de build.

## Visualização local

Você pode abrir `index.html` diretamente no navegador. Para testar em um servidor local (recomendado), execute na pasta do projeto:

```powershell
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Configuração do WhatsApp

O projeto não contém um número fictício. Enquanto o placeholder estiver ativo, os botões exibem um aviso de demonstração e não abrem links quebrados.

Edite `js/config.js` e substitua `COLOQUE_O_NUMERO_AQUI` pelo número real no formato internacional, somente com dígitos:

```js
window.VERTICE_CONFIG = {
  whatsappNumber: "5511999999999",
};
```

## Publicação

Por ser um site estático, pode ser publicado na Vercel sem configurações especiais: importe a pasta do projeto e deixe o diretório de saída em branco.

Antes do uso comercial, configure o número real, substitua os textos institucionais necessários e revise metadados de compartilhamento com a URL definitiva.

## Fotografias

Imagens armazenadas localmente em `assets/images`, usadas para fins demonstrativos:

- Hero: [Ilya Godze / Unsplash](https://unsplash.com/photos/a-dark-luxury-sedan-parked-at-night-a5smH5kgpzc)
- Lavagem detalhada: [Fine Automotive Detailing / Unsplash](https://unsplash.com/photos/man-steam-cleans-the-interior-of-a-car-0a36BVNdWek)
- Higienização interna: [Luay Barani / Unsplash](https://unsplash.com/photos/man-cleaning-car-dashboard-with-brush-pdMgepnEapo)
- Polimento técnico: [Hasan Gulec / Pexels](https://www.pexels.com/photo/a-person-buffing-a-car-11139244/)

Consulte as licenças atuais do [Unsplash](https://unsplash.com/license) e do [Pexels](https://www.pexels.com/license/) antes de reutilizar as imagens em um projeto de cliente.
