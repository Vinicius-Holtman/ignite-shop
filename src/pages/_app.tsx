import type { AppProps } from 'next/app'
import { globalStyles } from "../styles/globals";
import logoImg from "../assets/logo.svg"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>

  ) 
}
