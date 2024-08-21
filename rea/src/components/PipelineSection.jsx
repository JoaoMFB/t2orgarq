import React from 'react';
import './PipelineSection.css';
import headerBg from '../assets/images/headerBg.jpg';
import pipeline from '../assets/images/pipeline.png'
import cache1 from '../assets/images/cache1.jpg';
import cache2 from '../assets/images/cache2.jpg';
import cache3 from '../assets/images/cache3.jpg';


function PipelineSection() {
  return (
    <div className="pipeline-section">
      <h1 className="title" style={{ backgroundImage: `url(${headerBg})` }}>
        CPU Em Campo: Entendendo os Computadores Através do Futebol
      </h1>      
      <div className="intro">
        <h2>Introdução à organização e arquitetura de computadores e por quê conectar com o futebol</h2>
          <p>
            A organização e arquitetura de computadores são conceitos fundamentais para entender como os computadores modernos funcionam. Eles abrangem a maneira como os componentes internos de um computador são organizados e como esses componentes interagem para realizar tarefas complexas de maneira eficiente. Esses conceitos incluem o estudo de processadores, memórias, interfaces de entrada e saída, e os métodos pelos quais esses componentes se comunicam e executam instruções.
          </p>
          <p>
            Ao longo deste texto, utilizaremos uma analogia com o futebol para entender esses conceitos técnicos. Assim como um time de futebol precisa de uma estratégia bem definida, onde cada jogador desempenha um papel específico para alcançar o objetivo, a arquitetura de computadores envolve a coordenação precisa entre diferentes componentes para realizar tarefas computacionais. Por meio dessa analogia, desmistificaremos conceitos como o pipeline de instruções, caches e funções de mapeamento, tornando-os mais acessíveis e compreensíveis para todos.
          </p>
          <p>
            Ao longo deste material, exploraremos como essas estratégias se aplicam tanto ao futebol quanto aos computadores, mostrando como uma boa organização e planejamento podem levar a um desempenho superior em ambas as áreas. Esta abordagem permitirá uma compreensão mais profunda dos mecanismos subjacentes que impulsionam tanto os processadores de última geração quanto as táticas que levam um time de futebol à vitória.
          </p>
      </div>

      <div className="introduction">
        <h2>O que é Pipeline?</h2>
        <p>O pipeline é uma técnica utilizada em processadores modernos para melhorar o desempenho ao executar várias instruções simultaneamente. Assim como uma linha de montagem em uma fábrica, onde diferentes etapas de montagem ocorrem em paralelo, o pipeline divide o processamento de instruções da CPU em várias etapas que podem ser realizadas simultaneamente. Isso permite que a CPU execute múltiplas instruções em diferentes estágios ao mesmo tempo, aumentando a eficiência e a velocidade de processamento. Vamos explorar como isso funciona com uma analogia do futebol.</p>
      </div>

      <div className="description">
        <h2>Etapas do Pipeline</h2>
        <p><strong>1. Fetch (Busca):</strong> A etapa de Fetch é responsável por recuperar a próxima instrução a ser executada a partir da memória. A CPU usa o contador de programa (Program Counter, PC) para determinar o endereço da próxima instrução. A instrução é então carregada no registrador de instrução (Instruction Register, IR). Esta etapa é crucial para garantir que a CPU tenha a instrução correta para processar em etapas subsequentes.</p>
        <p><strong>2. Decode (Decodificação):</strong> Na etapa de Decode, a instrução que foi buscada é analisada para determinar quais operações devem ser realizadas. A CPU decodifica a instrução para identificar os operandos e o tipo de operação a ser executada. Isso envolve traduzir a instrução em sinais de controle que direcionam a execução das operações específicas necessárias. É aqui que a CPU interpreta o que precisa ser feito com a instrução.</p>
        <p><strong>3. Execute (Execução):</strong> A etapa de Execute é onde a operação especificada pela instrução é realmente realizada. Dependendo do tipo de instrução, isso pode envolver operações aritméticas, lógicas, ou a manipulação de dados. Os resultados da execução são calculados e preparados para o próximo estágio. Por exemplo, se a instrução é uma operação de adição, a CPU realiza a adição dos valores fornecidos.</p>
        <p><strong>4. Memory Access (Acesso à Memória):</strong> Durante a etapa de Memory Access, a CPU pode precisar ler ou escrever dados na memória. Se a instrução envolve operações que requerem acesso a dados armazenados, essa etapa é responsável por buscar esses dados da memória ou atualizar a memória com novos valores. Por exemplo, se a instrução é uma leitura de um endereço de memória específico, a CPU acessa a memória para obter o valor armazenado nesse endereço.</p>
        <p><strong>5. Write Back (Gravação de Resultados):</strong> Na etapa de Write Back, os resultados da execução e do acesso à memória são gravados de volta nos registradores ou na memória. Isso finaliza o processamento da instrução, armazenando os resultados finais onde eles serão usados por instruções futuras. É aqui que os resultados das operações aritméticas ou lógicas são colocados nos registradores ou na memória, prontos para serem utilizados posteriormente.</p>
        <img src={pipeline} alt="Pipeline" className="cache-image" />
        <div className='legenda'>
          <p><strong>Figura 1:</strong> Pipeline</p>
        </div>
      </div>

      <div className="example">
        <h2>O Pipeline no Futebol</h2>
        <p>Imagine um jogo de futebol para entender melhor como funciona o pipeline. Cada jogada que um time faz pode ser vista como uma "instrução" que precisa ser executada, e o time atua como uma CPU. </p>
        <ul>
          <li><strong>1. Fetch (Receber a Bola):</strong> O jogador inicial busca a bola.</li>
          <li><strong>2. Decode (Planejar a Jogada):</strong> O jogador decide o próximo movimento.</li>
          <li><strong>3. Execute (Realizar a Jogada):</strong> O jogador passa a bola ou chuta ao gol.</li>
          <li><strong>4. Memory Access (Buscar Dados na Memória):</strong> O jogador ajusta sua estratégia com base na posição dos outros jogadores.</li>
          <li><strong>5. Write Back (Finalizar a Jogada):</strong> A jogada é concluída com sucesso.</li>
        </ul>

<p>Para entender melhor, imagine que as ações dos jogadores em um campo de futebol ocorram de forma sobreposta. Enquanto um jogador está decidindo seu próximo movimento, o outro jogador está em busca da bola. No entanto, esse processo pode levar a conflitos, semelhantes aos que ocorrem em um pipeline de CPU. Por exemplo, imagine que dois jogadores estão pedindo a bola ao mesmo tempo. No mundo real, apenas um jogador pode receber a bola por vez. O segundo jogador precisará aguardar até que o primeiro complete sua ação com a bola antes de poder continuar.</p><p> Da mesma forma, em um pipeline de CPU, se dois componentes requisitam o mesmo recurso ou dado simultaneamente, um deles pode ter que esperar até que o outro termine sua operação. Por exemplo, se dois componentes diferentes da CPU solicitam acesso ao mesmo bloco de memória cache, apenas um deles pode acessar o dado de cada vez, e o outro terá que aguardar até que o recurso esteja disponível. Isso pode causar atrasos e é um exemplo clássico de conflitos no pipeline.</p>      </div>
      
      <div className="description">
        <h2>Descrição Técnica dos Caches e Funções de Mapeamento</h2>
        <p><strong>1. Definição de Cache:</strong> O cache é uma memória de acesso rápido que armazena uma cópia das informações que são frequentemente acessadas pela CPU. O objetivo do cache é reduzir o tempo de acesso aos dados e melhorar o desempenho geral do sistema.</p>
        <p><strong>2. Funções de Mapeamento:</strong> Existem diferentes métodos para mapear dados no cache, incluindo mapeamento direto, associativo e associativo por conjunto:</p>
        <ul>
          <p><li><strong>Mapeamento Direto:</strong> Cada bloco de memória principal é mapeado para uma única linha de cache. É como ter uma prateleira específica para cada tipo de item.</li></p>
          <p><li><strong>Mapeamento Associativo:</strong> Qualquer bloco de memória pode ser armazenado em qualquer linha de cache. É como uma prateleira onde você pode colocar qualquer item em qualquer lugar.</li></p>
          <p><li><strong>Mapeamento Associativo por Conjunto:</strong> Combina elementos dos dois métodos anteriores. O cache é dividido em conjuntos, e cada bloco de memória pode ser armazenado em qualquer linha dentro de um conjunto específico. É como uma prateleira dividida em seções onde os itens podem ser colocados em qualquer lugar dentro de sua seção.</li></p>
        </ul>
      </div>

      <div className="example">
  <h2>Cache no Futebol</h2>
  <p>Vamos usar uma analogia de futebol para entender o cache e suas funções de mapeamento. Para ilustrar utilizaremos imagens geradas pela IA <a href="https://gencraft.com/generate" target="_blank" rel="noopener noreferrer">Gencraft.</a></p>
  <ul>
    <li>
      <strong>1. Definição de Cache:</strong> Imagine um time de futebol que mantém um armário com os itens essenciais que eles usam frequentemente durante os jogos, como luvas de goleiro e bolas de treino. Esse armário é o cache, que armazena os itens que são mais usados para acesso rápido.
    </li>
    <li>
      <strong>2. Mapeamento Direto:</strong> Suponha que você tem um armário com compartimentos específicos para diferentes tipos de itens. Cada tipo de item tem seu lugar fixo. Isso é semelhante ao mapeamento direto, onde cada bloco de memória tem um lugar específico no cache.<br/> Na nossa analogia do armário, cada jogador tem um compartimento que guarda sua própria camiseta de jogo, exclusivamente.
      
      <img src={cache1} alt="Mapeamento Direto no Futebol" className="cache-image" />
      <div className='legenda'>
        <p><strong>Figura 2:</strong> Mapeamento direto ilustrado por meio de um armário com divisórias específicas para cada jogador</p>
      </div>
    </li>
    <li>
      <strong>3. Mapeamento Associativo:</strong> Imagine que você tem um armário onde qualquer item pode ser colocado em qualquer compartimento. Não importa onde você coloca o item, desde que haja espaço. Na nossa analogia, os itens dos jogadores estariam todos misturados. Isso representa o mapeamento associativo, onde qualquer bloco de memória pode ser armazenado em qualquer linha de cache.
      <img src={cache2} alt="Mapeamento Associativo no Futebol" className="cache-image" />
      <div className='legenda'>
        <p><strong>Figura 3:</strong> Mapeamento Associativo exemplificado com um armário onde não há divisão explícita de jogador nos compartimentos</p>
      </div>
    </li>
    <li>
      <strong>4. Mapeamento Associativo por Conjunto:</strong> Finalmente, pense em um armário dividido em seções. Dentro de cada seção, você pode colocar qualquer item. Isso é como o mapeamento associativo por conjunto, onde o cache é dividido em conjuntos e cada bloco pode ser armazenado em qualquer linha dentro do seu conjunto. <br/>Pensando no nosso armário, poderíamos separar os compartimentos por posição dos jogadores, e dentro de cada compartimento estariam misturados os itens dos jogadores.
      <img src={cache3} alt="Mapeamento Associativo por Conjunto no Futebol" className="cache-image" />
      <div className='legenda'>
        <p><strong>Figura 4:</strong> Mapeamento Associativo por Conjunto ilustrado por um armário com divisórias que representam as posições, mas dentro deles não há organização de jogadores</p>
      </div>
    </li>
  </ul>
</div>

      <footer className="footer">
        <p>
          Header background image by <a href="https://pikbest.com//backgrounds/computer-keyboard-with-a-3d-rendered-soccer-ball_9735459.html">Pikbest</a>
        </p>
      </footer>
    </div>
  );
}

export default PipelineSection;
