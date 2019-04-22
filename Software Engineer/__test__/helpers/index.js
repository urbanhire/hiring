module.exports = {
  response: (result, statusCode) => {
    expect(result.statusCode)
      .toBe(statusCode);
  
    expect(result.header['content-type'])
          .toEqual('application/json; charset=utf-8');
  
    expect(result.body)
      .not.toBeNull();
  },
};
