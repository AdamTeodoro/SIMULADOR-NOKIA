

export class STRMODEL {
    /**
     * Transforma objeto em string
     */
    public static toStr(json: any) {
        const str = JSON.stringify(json);
        return str;
    }
    
    /**
     * Transforma string em objeto
     */
    public static toJson(str: string) {
        const json = JSON.parse(str);
        return json;
    }
}
