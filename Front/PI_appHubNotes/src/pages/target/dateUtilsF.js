export const getCurrentDateInfo = () => {
    const data = new Date();
    const diasDaSemana = ['Domingo', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const monthShotNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    const weekday = diasDaSemana[data.getDay()];
    const month = mesesDoAno[data.getMonth()];
    const monthShort = monthShotNames[data.getMonth()]
    const day = data.getDate();
    const year = data.getFullYear();

    return { weekday, month, day, year, monthShort };
};