import React from 'react';
import transactions from '../data/finances.json';

// Lógica para agrupar despesas por categoria para o gráfico
const getCategoryData = (data) => {
  const categoryMap = {};

  data
    .filter((t) => t.tipo === 'despesa')
    .forEach((t) => {
      const value = t.valor;
      const category = t.categoria;
      categoryMap[category] = (categoryMap[category] || 0) + value;
    });

  // Converte o mapa para um array de objetos para fácil iteração
  return Object.entries(categoryMap).map(([name, value]) => ({ name, value }));
};

const Dashboard = () => {
  const totalReceitas = transactions
    .filter((t) => t.tipo === 'receita')
    .reduce((sum, t) => sum + t.valor, 0);

  const totalDespesas = transactions
    .filter((t) => t.tipo === 'despesa')
    .reduce((sum, t) => sum + t.valor, 0);

  const saldoAtual = totalReceitas - totalDespesas;
  const categoryData = getCategoryData(transactions);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount);
  };

  return (
    <section id="dashboard" className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
          Projeto 2: Dashboard de Gestão Financeira (MVP)
        </h2>

        {/* --- Cartões de Resumo Financeiro (Upgrade) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Cartão Saldo Atual */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {/* Ícone de Carteira */}
              <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2h9zm-9-2h9v-4h-9v4z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Saldo Total
            </p>
            <p
              className={`text-4xl font-extrabold mt-2 ${
                saldoAtual >= 0 ? 'text-gray-900 dark:text-white' : 'text-red-500'
              }`}
            >
              {formatCurrency(saldoAtual)}
            </p>
            <div
              className={`mt-4 inline-flex items-center text-sm font-bold ${
                saldoAtual >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {saldoAtual >= 0 ? '▲ Positivo' : '▼ Negativo'}
            </div>
          </div>

          {/* Cartão Receitas */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-4 right-4 p-2 bg-green-500/10 rounded-lg">
              {/* Seta para cima */}
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Entradas
            </p>
            <p className="text-3xl font-bold mt-2 text-green-500">
              {formatCurrency(totalReceitas)}
            </p>
          </div>

          {/* Cartão Despesas */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-4 right-4 p-2 bg-red-500/10 rounded-lg">
              {/* Seta para baixo */}
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                ></path>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Saídas
            </p>
            <p className="text-3xl font-bold mt-2 text-red-500">
              {formatCurrency(totalDespesas)}
            </p>
          </div>
        </div>

        {/* --- Gráfico Simples de Barra (Simulação) --- */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Distribuição de Despesas por Categoria
          </h3>
          <div className="space-y-4">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="w-32 text-gray-600 dark:text-gray-400">{item.name}</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4 relative mx-4">
                  <div
                    className="bg-red-500 h-4 rounded-full"
                    style={{
                      width: `${(item.value / totalDespesas) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(item.value)}
                </span>
              </div>
            ))}

            {categoryData.length === 0 && (
              <p className="text-center text-gray-500">Nenhuma despesa encontrada para o gráfico.</p>
            )}
          </div>
        </div>

        {/* --- Tabela de Transações --- */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Histórico de Transações
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  <th className="px-6 py-3">Data</th>
                  <th className="px-6 py-3">Descrição</th>
                  <th className="px-6 py-3">Categoria</th>
                  <th className="px-6 py-3 text-right">Valor</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {transactions.map((t) => (
                  <tr
                    key={t.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {t.data}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {t.descricao}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {t.categoria}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm text-right font-semibold ${
                        t.tipo === 'receita' ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {t.tipo === 'receita' ? '+' : '-'} {formatCurrency(t.valor)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {transactions.length === 0 && (
            <p className="text-center py-6 text-gray-500 dark:text-gray-400">
              Nenhuma transação registrada.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
