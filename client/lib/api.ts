import * as fetch from 'isomorphic-fetch';

class Api {
    private host: string = `${process.env.apiHost}:${process.env.apiPort}`;

    public async getPrefixes() {
        return fetch(`http://${this.host}/affixes?affixType=suffix`)
            .then(r => r.json());
    }

    public async getSuffixes() {
        return fetch(`http://${this.host}/affixes?affixType=suffix`)
            .then(r => r.json());

    }
}

export const API = new Api();
