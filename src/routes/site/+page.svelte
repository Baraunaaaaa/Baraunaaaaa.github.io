<script>
   
    let produtos = [
      { id: 1, nome: "Arisu", preco: 5000, imagem: "https://images.immediate.co.uk/production/volatile/sites/3/2021/10/alice_in_borderland_arisu-519d33a.jpg?quality=90&fit=620,413", selecionado: false },
      { id: 2, nome: "Usagi", preco: 50, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAEvF5ZtUYmftK_1Ivc9A1BzF7Ux0OQN_sQ&s", selecionado: false },
      { id: 3, nome: "Chishiya", preco: 1000, imagem: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/chishiya-as-a-doctor-walking-out-of-a-hospital-room-in-alice-in-borderland-season-2-s-flashback-scene.jpg", selecionado: false },
      { id: 4, nome: "Aridu", preco: 275, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNXDSItFVIzpAEbbjqwmZTZUPUX9wxyEUOg&s", selecionado: false },
      { id: 5, nome: "Kuina", preco: 599, imagem: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/05/alice-in-borderland-kuina-hikari.jpg", selecionado: false }
    ];
  
 
    const calcularTotais = () => {
      const selecionados = produtos.filter(produto => produto.selecionado);
      const totalItens = selecionados.length;
      const valorTotal = selecionados.reduce((total, produto) => total + produto.preco, 0);
      return { totalItens, valorTotal };
    };
  
  
    const selecionarTudo = () => {
      produtos = produtos.map(produto => ({ ...produto, selecionado: true })); 
    };
  
    
    const limparSelecao = () => {
      produtos = produtos.map(produto => ({ ...produto, selecionado: false })); 
    };
  
    
    const finalizarCompra = () => {
      const selecionados = produtos.filter(produto => produto.selecionado);
      if (selecionados.length === 0) {
        alert("Você não selecionou nenhum produto.");
      } else {
        alert(`Compra finalizada! Você comprou:\n${selecionados.map(produto => `${produto.nome} - R$ ${produto.preco.toFixed(2)}`).join("\n")}\n\nTotal: R$ ${calcularTotais().valorTotal.toFixed(2)}`);
      }
    };
  </script>
  
  <main>
    <h1>Carrinho de Compras</h1>
  
    <div class="produtos">
      {#each produtos as produto}
        <div class="produto">
          <input type="checkbox" bind:checked={produto.selecionado} />
          <div class="imagem">
            <img src={produto.imagem} alt={produto.nome} />
          </div>
          <div class="info">
            <p>{produto.nome}</p>
            <p>R$ {produto.preco.toFixed(2)}</p>
          </div>
        </div>
      {/each}
    </div>
  
    <div>
      <button on:click={selecionarTudo}>Selecionar Tudo</button>
      <button on:click={limparSelecao}>Limpar Seleção</button>
    </div>
  
    <div>
      <p>Total de itens selecionados: {calcularTotais().totalItens}</p>
      <p>Valor total: R$ {calcularTotais().valorTotal.toFixed(2)}</p>
    </div>
  
    <button on:click={finalizarCompra}>Finalizar Compra</button>
  </main>

