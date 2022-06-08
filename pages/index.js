import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DG IMPLANTES - BANCO DE HORAS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br></br>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Banco de Horas <a href="https://nextjs.org">DG IMPLANTES</a>
        </h1>
        <table class="table-responsive">
  <thead>
    <tr>
      <th scope="col">Nomes</th>
      <th scope="col">Banco de Horas</th>
      <th scope="col">Janeiro</th>
      <th scope="col">Fevereiro</th>
      <th scope="col">Marco</th>
      <th scope="col">Abril</th>
      <th scope="col">Maio</th>
      <th scope="col">Junho</th>
      <th scope="col">Total Acumulado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gabriely Padovani Cruvinel dos Santos</th>
      <td class="text-danger">-44:02</td>
      <td>00:38</td>
      <td>09:58</td>
      <td class="text-danger">-02:53</td>
      <td class="text-danger">-14:34</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-50:53</td>    
    </tr>
    <tr>
      <th scope="row">Luciana Pereira Vieira</th>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td> 
    </tr>
    <tr>
      <th scope="row">Monica Alves da Silva Santos</th>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
    </tr>

    <tr>
      <th scope="row">Fabiola Faria Bueno</th>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
    </tr>

    <tr>
      <th scope="row">Monica Alves da Silva Santos</th>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
    </tr>

    <tr>
      <th scope="row">Fernanda de Araujo Silva</th>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
    </tr>


    <tr>
      <th scope="row">Ana Karolyne Cipriano Lemes</th>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
    </tr>

  </tbody>
</table>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
