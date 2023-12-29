



export const booksData = async (req, res) => {
    const { name } = req.params;
    const url = `${name}.json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
