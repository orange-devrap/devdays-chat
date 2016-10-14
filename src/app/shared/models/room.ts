export class Room {
    $key?: string;
    name: string;
    description?: string;

    constructor($name: string) {
        this.name = $name;
    }

}
