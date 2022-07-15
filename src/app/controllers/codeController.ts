import { Response, Request } from "express";

export class CodeController {
    /**
     * 
     * transforma o valor recebido e devolve decodificado
     */
    public static decode(req: Request, res: Response) {
        console.log(req.body);
        const arrayCode: Array<string> = req.body;
    
        if (arrayCode === undefined ||
            !arrayCode ||
            arrayCode.length <= 0
        ) return res.json({ decode: null });

        const tableOfDecode: any = {
            "0": "nbsp",
            "2": "a",
            "22": "b",
            "222": "c",
            "3": "d",
            "33": "e",
            "333": "f",
            "4": "g",
            "44": "h",
            "444": "i",
            "5": "j",
            "55": "k",
            "555": "l",
            "6": "m",
            "66": "n",
            "666": "o",
            "7": "p",
            "77": "q",
            "777": "r",
            "7777": "s",
            "8": "t",
            "88": "u",
            "888": "v",
            "9": "w",
            "99": "x",
            "999": "y",
            "9999": "z",
            "": ""
        }

        let decode = "";

        for (let code of arrayCode) {
            decode += tableOfDecode[code];
        }
        res.send(decode).status(200).end();
    }
}
