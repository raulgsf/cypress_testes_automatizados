const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
  env: {
    portalUrlFrontEnd: 'https://homolog-01.zydon.com.br/login',
    portalUrlBackEnd: 'https://api-portal-homologation.zydon.com.br',
    origin: 'homolog-01.zydon.com.br',

    accessTokenParceiro: '',
    userParceiro: 'parceiro@zydon.com.br',
    passwordParceiro: '123456',
    newPasswordParceiro: '1234567',

    fotoPerfilParceiro: '',
    nomeBasicoParceiro: 'Parceiro',
    cpfParceiro: '17236338605',
    telefoneParceiro: '34999990000',
    recebeNotificacaoParceiro: 'S',

    tipoParceiroPerfilParceiro: 'PV - PEDIDO DE VENDA NORMAL',

    nomeProdutoCarrinhoParceiro: 'Aço Inoxidável',
    tipoUnidadeCarrinhoParceiro: 'UNIDADE',
    quantidadeCarrinhoParceiro: 2,

    nomeProdutoParceiro: 'Amortecedor dianteiro - Corven - Chery Q',
    tipoUnidadeParceiro: 'UNIDADE',
    quantidadeProdutoParceiro: 2,

    nomeProdutoMaisVendidoParceiro: 'Aço Inoxidável',
    nomeProdutoFavoritoParceiro: 'Aço Inoxidável',

    enderecoEntregaParceiro: 'DIAMANTINA BOA VISTA N° 164 PATOS DE MINAS',
    tipoPagamentoParceiro: 'Cartao de Credito 4X',
    observacoesParceiro: 'nenhuma',

    nomeNotificacao: 'Teste',
    descricaoNotificacao: 'teste',
    timeout: 30000,

    FAQParceiro: 'Como ver as notificações?',
    categoriaFAQParceiro: 'NOTIFICAÇÕES',

    densidadeRegistros: 'Compacto',
    tamanhoDensidadeRegistros: '36', //36 Compacto/ 52 Padrão/ 67 Confortável

    colunaFinanceiro: 'Nro Único',
    ordenarPorFinanceiro: 'Vlr do Desdobramento',
    criterioBuscaFinanceiro: '227221',
    colunaFiltroFinanceiro: 'Dt. Vencimento',
    condicaoFiltroFinanceiro: 'Depois de',
    valorFiltroFinanceiro: '2019-08-09',

    valorNumeroUnicoFinanceiroComparacao: '117597',
    valorDesdobramentoFinanceiroComparacao: 'R$ 101,92', //setar com R$ e com virgula
    dataVencimentoFinanceiroComparacao: '09/08/2019',
    valorNumeroNotaFinanceiroComparacao: '153452',

    criterioBuscaMeusPedidos: '4268',
    colunaFiltroMeusPedidos: 'Nro. Único',
    configuracaoColunaMeusPedidos: 'Ocultar coluna',
    condicaoFiltroMeusPedidos: '=',
    valorFiltroMeusPedidos: '285755',
    valorNumeroUnicoMeusPedidosComparacao: '285755',
    valorNumeroNotaComparacao: '',
    dataNegociacaoMeusPedidos: '',

    grupoCategorias: 'Grupo de produto 1',
    marcaFiltroPaginaInicial: 'PANATTOS',
    novoParceiroTroca: 'DEYSON LUCAS RIBEIRO',
    antigoParceiroTroca: 'MARIA DAS GRACAS CARDOSO CORREA',
    codigoWidgetDetalhePedido: '285769',
    produtoAdicionaLista: 'BAGUETE 100 FERM CURTA MASSA CONG 3KG',
    tipoUnidadeAdicionaLista: 'QUILOGRAMA',

    accessTokenVendedor: '',
    userVendedor: 'vendedor@zydon.com.br',
    passwordVendedor: '123456',
    newPasswordVendedor: '1234567',

    fotoPerfilVendedor: '',
    nomeBasicoVendedor: 'Vendedor',
    cpfVendedor: '17236338605',
    telefoneVendedor: '34999990000',
    recebeNotificacaoVendedor: 'S',

    nomeParceiroPerfilVendedor: 'EMPRESA 1',
    tipoParceiroPerfilVendedor: 'PEDIDO DE VENDA WMS',

    nomeProdutoVendedor: 'Aço Inoxidável',
    tipoUnidadeVendedor: 'UNIDADE',
    quantidadeProdutoVendedor: 1,

    enderecoEntregaVendedor: 'ALCANTARA',
    tipoPagamentoVendedor: '120 Dias',
    observacoesVendedor: 'nenhuma',
    quantidadeDesconto: 10,

    FAQVendedor: 'Como ver as notificações?',
    categoriaFAQVendedor: 'NOTIFICAÇÕES',

    grupoCategorias: 'Grupo de produto 1',
  },
  video: false,
  reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/test-results-[hash].xml',
      toConsole: false,
    },
});
