import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div class="table-responsive" className={styles.container}>
      <Head>
        <title>DG IMPLANTES - BANCO DE HORAS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br></br>

      <main className={styles.main}>
      
        <h1>
        <Image src="/dgimplantes.png" alt="Dg Logo" width={180} height={100} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controle de Banco de Horas
        </h1>

        <hr></hr>



        <table class="table table-striped text-center">
  <thead>
    <tr>
      <th scope="col" class="text-start">Nomes</th>
      <th scope="col">Banco de Horas</th>
      <th scope="col">Julho</th>
      <th scope="col">Agosto</th>
      <th scope="col">Setembro</th>
      <th scope="col">Outubro</th>
      <th scope="col">Novembro</th>
      <th scope="col">Dezembro</th>
      <th scope="col">Total Acumulado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="text-start">MONICA</th>
      <td class="text-success">32:41</td> 
      <td class="text-danger">-69:27</td>
      <td class="text-danger">00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-36:46</td> 
        </tr>

      <tr>
      <th scope="row" class="text-start">ERIKA TAINA</th>
      <td class="text-success">23:07</td>
      <td class="text-success">07:35</td>
      <td class="text-danger">-04:07</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">26:35</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ANDRIA</th>
      <td class="text-danger">-00:10</td>
      <td class="text-danger">-04:16</td>
      <td class="text-danger">-07:40</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-12:06</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ANA JULIA</th>
      <td class="text-danger">-24:10</td>
      <td class="text-danger">-03:28</td>
      <td class="text-danger">-01:12</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-28:50</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">PRISCILA</th>
      <td class="text-danger">-07:41</td>
      <td class="text-danger">-24:32</td>
      <td class="text-success">00:59</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-31:14</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ANDREIA</th>
      <td class="text-success">11:35</td>
      <td class="text-danger">-03:04</td>
      <td class="text-danger">-06:01</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">02:30</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">GISELE</th>
      <td class="text-success">01:55</td>
      <td class="text-success">01:31</td>
      <td class="text-success">03:31</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">06:57</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">JULIA</th>
      <td class="text-danger">-02:25</td>
      <td class="text-danger">-24:28</td>
      <td class="text-danger">-05:02</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-31:55</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">LUDMILLA</th>
      <td class="text-danger">-02:01</td>
      <td class="text-success">00:34</td>
      <td class="text-success">06:21</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">04:54</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">MONYZE</th>
      <td class="text-warning">00:00</td>
      <td class="text-warning">00:00</td>
      <td class="text-danger">-00:14</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-00:14</td>
      </tr>

  </tbody>
</table>

<p>Atualizado em 05/11/2024</p>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </main>

    


    </div>


    
  )
  
}