import * as pdfMake from "pdfmake/build/pdfmake"
import * as pdfFonts from "pdfmake/build/vfs_fonts"
import type {Content, TDocumentDefinitions} from "pdfmake/interfaces"

function clientesPDF(clientes: { id: string, nome: string, email: string, fone: string }[]): void {
    // @ts-ignore
    pdfMake.vfs = pdfFonts.vfs;

    const reportTitle =
        {
            text: 'Clientes',
            fontSize: 15,
            bold: true,
            margin: [0, 15, 0, 20] as [number, number, number, number]
        };

    const dados = clientes.map((cliente) => {
        return [
            { text: cliente.id, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.nome, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.email, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.fone, fontSize: 9, margin: [0, 2, 0, 2] },
        ]
    })

    const details: Content = {
            table: {
                headerRows: 1,
                widths: ['25%', '30%', '30%', '15%'],
                body: [
                    [
                        { text: 'Código', style: 'tableHeader', fontSize: 10 },
                        { text: 'Nome', style: 'tableHeader', fontSize: 10 },
                        { text: 'E-mail', style: 'tableHeader', fontSize: 10 },
                        { text: 'Telefone', style: 'tableHeader', fontSize: 10 },
                    ],
                    ...dados
                ]
            },
            layout: 'LightHorizontalLines'
        };

    const Rodape = (currentPage: number, pageCount: number): Content => ({
                text: `${currentPage} /  ${pageCount}`,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0] as [number, number, number, number]
    });

    const docDefinitions: TDocumentDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: reportTitle,
        content: [details],
        footer: Rodape,
    };

    pdfMake.createPdf(docDefinitions).download();
}

export default clientesPDF;