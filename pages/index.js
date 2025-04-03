import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div class="table-responsive" className={styles.container}>
      <Head>
        <title>DG IMPLANTES - BANCO DE HORAS</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br></br>

      <main className={styles.main}>
        <h1>
          <Image
            src="/dgimplantes.png"
            alt="Dg Logo"
            width={180}
            height={100}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controle de
          Banco de Horas
        </h1>

        <hr></hr>

        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col" class="text-start">
                Nomes
              </th>
              <th scope="col">Total Acumulado</th>
              <th scope="col">Janeiro</th>
              <th scope="col">Fevereiro</th>
              <th scope="col">Março</th>
              <th scope="col">Abril</th>
              <th scope="col">Maio</th>
              <th scope="col">Junho</th>
              <th scope="col">Banco de Horas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="text-start">
                ANA KAROLYNE
              </th>
              <td> 00:00 </td>
              <td class="text-danger">-12:19</td>
              <td class="text-danger">-83:17</td>
              <td class="text-danger">-70:02</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td class="text-danger">-165:38</td>
            </tr>

            <tr>
              <th scope="row" class="text-start">
                ANDREIA
              </th>
              <td class="text-danger">-11:38</td>
              <td class="text-danger">-08:57</td>
              <td class="text-success">02:38</td>
              <td class="text-danger">-27:44</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td class="text-danger">-41:35</td>
            </tr>

            <tr>
              <th scope="row" class="text-start">
                ERIKA TAINA
              </th>
              <td class="text-danger">-12:28</td>
              <td class="text-danger">-11:41</td>
              <td class="text-danger">-11:17</td>
              <td class="text-danger">-22:55</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td class="text-danger">-53:53</td>
            </tr>

            <tr>
              <th scope="row" class="text-start">
                GISELE
              </th>
              <td class="text-danger">-15:45</td>
              <td class="text-success">02:54</td>
              <td class="text-danger">-06:14</td>
              <td class="text-danger">-18:57</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td class="text-danger">-30:21</td>
            </tr>

            <tr>
              <th scope="row" class="text-start">
                HELEUZA
              </th>
              <td class="text-danger">-40:59</td>
              <td class="text-danger">-17:39</td>
              <td class="text-danger">-16:44</td>
              <td class="text-danger">-32:57</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td class="text-danger">-108:19</td>
            </tr>

            <tr>
              <th scope="row" class="text-start">
                LUDMILLA
              </th>
              <td class="text-success">01:32</td>
              <td class="text-danger">-02:14</td>
              <td class="text-danger">-00:03</td>
              <td class="text-danger">-08:22</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td class="text-danger">-09:07</td>
            </tr>

            <tr>
              <th scope="row" class="text-start">
                PRISCILA
              </th>
              <td class="text-danger">-89:30</td>
              <td class="text-danger">-08:24</td>
              <td class="text-success">09:35</td>
              <td class="text-danger">-25:50</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td class="text-danger">-114:09</td>
            </tr>

            <tr>
              <th scope="row" class="text-start">
                VITORIA
              </th>
              <td>00:00</td>
              <td class="text-danger">-01:55</td>
              <td class="text-danger">-03:41</td>
              <td class="text-danger">-05:12</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td class="text-danger">-10:48</td>
            </tr>
          </tbody>
        </table>

        <p>Atualizado em 03/04/2025</p>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>
      </main>
    </div>
  );
}
