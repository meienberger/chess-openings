import ChessOpeningDAG from '../openings-dag';

export const ruyLopezDAG = new ChessOpeningDAG();

const closedRuyLopez = [
  'e4',
  'e5',
  'Nf3',
  'Nc6',
  'Bb5',
  'a6',
  'Ba4',
  'Nf6',
  'O-O',
  'Be7',
  'Re1',
  'b5',
  'Bb3',
  'd6',
  'c3',
  'O-O',
  'h3',
  'Nb8',
  'd4',
  'Nbd7',
  'Nbd2',
  'c5',
  'dxc5',
  'Nxc5',
];

const openRuyLopez = [
  'e4',
  'e5',
  'Nf3',
  'Nc6',
  'Bb5',
  'a6',
  'Ba4',
  'Nf6',
  'O-O',
  'Nxe4',
  'd4',
  'b5',
  'Bb3',
  'd5',
  'dxe5',
  'Be6',
  'c3',
  'Bc5',
  'Nbd2',
  'O-O',
];

const marshallAttackRuyLopez = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'O-O', 'c3', 'd5'];

const exchangeRuyLopez = [
  'e4',
  'e5',
  'Nf3',
  'Nc6',
  'Bb5',
  'a6',
  'Bxc6',
  'dxc6',
  'O-O',
  'f6',
  'd4',
  'exd4',
  'Nxd4',
  'c5',
  'Nb3',
  'Qxd1',
  'Rxd1',
  'Bd6',
  'Be3',
  'Ne7',
];

const berlinWallRuyLopez = [
  'e4',
  'e5',
  'Nf3',
  'Nc6',
  'Bb5',
  'Nf6',
  'O-O',
  'Nxe4',
  'd4',
  'Nd6',
  'Bxc6',
  'dxc6',
  'dxe5',
  'Nf5',
  'Qxd8+',
  'Kxd8',
  'Nc3',
  'Be7',
  'h3',
  'h5',
  'Rd1+',
];

ruyLopezDAG.addLines([closedRuyLopez, openRuyLopez, marshallAttackRuyLopez, exchangeRuyLopez, berlinWallRuyLopez]);
