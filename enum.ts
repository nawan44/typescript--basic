enum TicketStatus {
    Closed,
    Open,
    InProgress,
    Resolved
}

console.log(TicketStatus.Closed)
console.log(TicketStatus.Open)
console.log(TicketStatus.InProgress)
console.log(TicketStatus.Resolved)

interface TicketSupport {
    title: string,
    status: TicketStatus
}

const ticket: TicketSupport = {
    title: 'Something',
    status: TicketStatus.Closed
}

