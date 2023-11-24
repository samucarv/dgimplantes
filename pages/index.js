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
      <th scope="row" class="text-start">LUCIANA</th>
      <td class="text-success">21:46</td>
      <td class="text-danger">-01:47</td>
      <td class="text-danger">-62:43</td>
      <td class="text-danger">-45:49</td>
      <td class="text-success">10:42</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-77:51</td> 
    </tr>
    <tr>
      <th scope="row" class="text-start">MONICA</th>
      <td class="text-danger">-55:46</td>
      <td class="text-danger">-03:01</td>
      <td class="text-success">07:05</td>
      <td class="text-success">05:06</td>
      <td class="text-success">03:44</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-42:52</td> 
        </tr>

    <tr>
      <th scope="row" class="text-start">FABIOLA</th>
      <td class="text-danger">-72:46</td>
      <td class="text-danger">-07:37</td>
      <td class="text-success">08:17</td>
      <td class="text-danger">-01:59</td>
      <td class="text-danger">-01:04</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-75:09</td>
      </tr>

    <tr>
      <th scope="row" class="text-start">ANA KAROLYNE</th>
      <td class="text-success">01:12</td>
      <td class="text-success">07:27</td>
      <td class="text-danger">-04:25</td>
      <td class="text-success">03:47</td>
      <td class="text-success">00:13</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">08:14</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">IVANILDE</th>
      <td class="text-success">90:37</td>
      <td class="text-success">00:36</td>
      <td class="text-success">35:54</td>
      <td class="text-danger">-17:24</td>
      <td class="text-success">17:57</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-danger">-02:20</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ERIKA TAINA</th>
      <td class="text-success">04:32</td>
      <td class="text-success">01:07</td>
      <td class="text-success">11:06</td>
      <td class="text-success">08:47</td>
      <td class="text-success">03:21</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">28:53</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">JULIA</th>
      <td class="text-success">07:30</td>
      <td class="text-danger">-00:30</td>
      <td class="text-danger">-03:08</td>
      <td class="text-success">01:42</td>
      <td class="text-success">03:37</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">09:11</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ANDRIA</th>
      <td class="text-success">15:24</td>
      <td class="text-danger">-02:43</td>
      <td class="text-success">10:01</td>
      <td class="text-success">03:58</td>
      <td class="text-success">01:22</td>
      <td>00:00</td>
      <td>00:00</td>
      <td class="text-success">28:02</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">FLAVIA RAYSSA</th>
      <td class="text-warning">00:00</td>
      <td class="text-danger">-35:49</td>
      <td class="text-danger">-23:38</td>
      <td class="text-success">01:42</td>
      <td class="text-danger">-20:39</td>
      <td> 00:00</td>
      <td> 00:00</td>
      <td class="text-danger">-78:24</td>
      </tr>

      <tr>
      <th scope="row" class="text-start">ANA JULIA</th>
      <td class="text-danger">-00:32</td>
      <td class="text-danger">-01:55</td>
      <td class="text-danger">-00:59</td>
      <td class="text-success">00:47</td>
      <td class="text-danger">-01:52</td>
      <td> 00:00</td>
      <td> 00:00</td>
      <td class="text-danger">-04:31</td>
      </tr>




  </tbody>
</table>

<p>Atualizado em 09/11/2023</p>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </main>

    


    </div>


    
  )
  
}
