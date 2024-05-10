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
      <th scope="col">Janeiro</th>
      <th scope="col">Fevereiro</th>
      <th scope="col">Março</th>
      <th scope="col">Abril</th>
      <th scope="col">Maio</th>
      <th scope="col">Junho</th>
      <th scope="col">Total Acumulado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="text-start">LUCIANA</th>
      <td class="text-danger">-68:22</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-68:22</td> 
    </tr>
    <tr>
      <th scope="row" class="text-start">MONICA</th>
      <td class="text-danger">-14:00</td>
      <td class="text-success">08:11</td>
      <td class="text-success">27:53</td>
      <td class="text-success">10:17</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">43:49</td> 
        </tr>

    <tr>
      <th scope="row" class="text-start">FABIOLA</th>
      <td class="text-danger">-64:57</td>
      <td class="text-danger">-05:00</td>
      <td class="text-success">07:52</td>
      <td class="text-danger">-05:12</td>
      <td class="text-success">01:38</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-65:39</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">IVANILDE</th>
      <td class="text-success">61:03</td>
      <td class="text-success">23:06</td>
      <td class="text-success">26:28</td>
      <td class="text-success">35:22</td>
      <td class="text-success">14:15</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">80:14</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ERIKA TAINA</th>
      <td class="text-success">29:37</td>
      <td class="text-danger">-01:54</td>
      <td class="text-success">02:43</td>
      <td class="text-danger">-03:40</td>
      <td class="text-success">07:25</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">34:11</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ANDRIA</th>
      <td class="text-success">43:38</td>
      <td class="text-danger">-02:38</td>
      <td class="text-success">10:40</td>
      <td class="text-success">04:53</td>
      <td class="text-success">07:42</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">14:15</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ANA JULIA</th>
      <td class="text-danger">-03:40</td>
      <td class="text-danger">-00:02</td>
      <td class="text-danger">-09:13</td>
      <td class="text-success">04:12</td>
      <td class="text-danger">-08:46</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-17:29</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">PRISCILA</th>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">14:40</td>
      <td class="text-danger">-01:04</td>
      <td class="text-success">13:13</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">26:49</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ANDREIA</th>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">05:50</td>
      <td class="text-success">05:35</td>
      <td class="text-success">06:27</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">17:52</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">JACQUELINE</th>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">02:21</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">02:21</td>
      </tr>


  </tbody>
</table>

<p>Atualizado em 09/05/2024</p>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </main>

    


    </div>


    
  )
  
}