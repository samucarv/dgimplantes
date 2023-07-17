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
      <td class="text-success">06:53</td>
      <td class="text-success">14:33</td>
      <td class="text-success">08:57</td>
      <td class="text-success">15:15</td>
      <td class="text-danger">-29:35</td>
      <td class="text-danger">-14:40</td>
      <td class="text-success">15:23</td>
      <td class="text-success">21:46</td> 
    </tr>
    <tr>
      <th scope="row" class="text-start">MONICA</th>
      <td class="text-danger">-10:03</td>
      <td class="text-success">06:02</td>
      <td class="text-success">14:53</td>
      <td class="text-success">18:46</td>
      <td class="text-danger">-14:02</td>
      <td class="text-danger">-66:21</td>
      <td class="text-danger">-05:01</td>
      <td class="text-danger">-55:46</td> 
        </tr>

    <tr>
      <th scope="row" class="text-start">FABIOLA</th>
      <td class="text-danger">-49:38</td>
      <td class="text-danger">-08:09</td>
      <td class="text-danger">-05:20</td>
      <td class="text-success">01:19</td>
      <td class="text-danger">-13:01</td>
      <td class="text-success">01:29</td>
      <td class="text-danger">-04:26</td>
      <td class="text-danger">-72:46</td>
      </tr>

    <tr>
      <th scope="row" class="text-start">ANA KAROLYNE</th>
      <td class="text-danger">-13:42</td>
      <td class="text-success">06:07</td>
      <td class="text-success">01:33</td>
      <td class="text-danger">-06:48</td>
      <td class="text-success">03:16</td>
      <td class="text-success">00:13</td>
      <td class="text-success">05:33</td>
      <td class="text-success">01:12</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">IVANILDE</th>
      <td class="text-success">86:17</td>
      <td class="text-success">29:36</td>
      <td class="text-success">33:51</td>
      <td class="text-success">44:51</td>
      <td class="text-danger">-28:27</td>
      <td class="text-success">40:08</td>
      <td class="text-success">34:21</td>    
      <td class="text-success">90:37</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ERIKA TAINA</th>
      <td class="text-success">03:32</td>
      <td class="text-success">00:31</td>
      <td class="text-danger">-05:38</td>
      <td class="text-success">03:19</td>
      <td class="text-danger">-19:13</td>
      <td class="text-success">15:00</td>
      <td class="text-success">07:01</td>
      <td class="text-success">04:32</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">JULIA</th>
      <td class="text-danger">-04:40</td>
      <td class="text-success">08:48</td>
      <td class="text-success">00:26</td>
      <td class="text-success">00:32</td>
      <td class="text-success">02:23</td>
      <td class="text-success">00:53</td>
      <td class="text-danger">-05:52</td>
      <td class="text-success">07:30</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ANDRIA</th>
      <td> 00:00</td>
      <td> 00:00</td>
      <td> 00:00</td>
      <td> 00:00</td>
      <td> 00:00</td>
      <td class="text-success">06:39</td>
      <td class="text-success">08:45</td>
      <td class="text-success">15:24</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">FLAVIA RAYSSA</th>
      <td> 00:00</td>
      <td> 00:00</td>
      <td> 00:00</td>
      <td> 00:00</td>
      <td> 00:00</td>
      <td class="text-success">08:31</td>
      <td class="text-danger">-08:31</td>
      <td class="text-warning">00:00</td>
      </tr>


  </tbody>
</table>

<p>Atualizado em 17/07/2023</p>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </main>

    


    </div>


    
  )
  
}
