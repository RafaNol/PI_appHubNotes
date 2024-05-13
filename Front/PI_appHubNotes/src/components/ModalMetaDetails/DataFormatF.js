export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    const year = date.getFullYear().toString();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    return `${day}/${month}/${year}`;
};