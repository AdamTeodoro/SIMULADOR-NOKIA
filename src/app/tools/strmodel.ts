

export class STRMODEL {

    public static toStr(json: any) {
        const str = JSON.stringify(json);
        return str;
    }

    public static toJson(str: string) {
        const json = JSON.parse(str);
        return json;
    }
}