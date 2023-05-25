/*Function to return the previous or next day based on date(current date) & type(previos or next)*/
export const getRequestedDay = (date, type) => {
    const curr = new Date(date.getTime());
    if (type === "prev") {
      curr.setDate(date.getDate() - 1);
    } else if (type === "next") {
      curr.setDate(date.getDate() + 1);
    }
    
    const year = curr.toLocaleString("default", { year: "numeric" });
    const month = curr.toLocaleString("default", { month: "2-digit" });
    const day = curr.toLocaleString("default", { day: "2-digit" });
    const formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
}