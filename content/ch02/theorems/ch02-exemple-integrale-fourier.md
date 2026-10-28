---
id: ch02-exemple-integrale-fourier
type: proposition
chapter: 2
title: "Calcul d'une intégrale de Fourier : $\int_{-\infty}^{+\infty}\frac{\cos(kx)}{x^2+a^2}dx = \frac{\pi}{a}e^{-ka}$"
ref: Exemple II.6.1
page: 48
importance: 2
depends: [ch02-formule-residus-pratique, ch02-residu-pole-simple, ch01-longueur-majoration-integrale, ch02-meromorphes-operations, ch01-integrale-reparametrage-oppose-concatenation]
tags: [residus, fourier, calcul-integrales, demi-disque, contour]
---
## Intuition

> 💡 On veut une intégrale **réelle** sur $\R$. Idée : la voir comme un morceau d'une intégrale **complexe** sur un contour fermé — le segment $[-R,R]$ complété par un demi-cercle dans le demi-plan supérieur. La formule des résidus calcule l'intégrale sur le contour fermé ; il reste à montrer que le demi-cercle ne contribue plus quand $R\to+\infty$.

Le choix décisif est de remplacer $\cos(kx)$ par $e^{ikx}$ (dont $\cos(kx)$ est la partie réelle) : pour $k>0$, $|e^{ikz}|=e^{-k\Im z}\le1$ dans le demi-plan supérieur, alors que $\cos(kz)$ y explose. Le demi-cercle est alors écrasé par le dénominateur $z^2+a^2$, de taille $R^2$, contre une longueur $\pi R$.

Outils : la forme pratique de la formule des résidus ([[ch02-formule-residus-pratique]]), le calcul d'un résidu en un pôle simple ([[ch02-residu-pole-simple]]), et la majoration $\big|\int_\gamma g\big|\le\sup_\gamma|g|\cdot L(\gamma)$, où $L(\gamma)$ est la longueur du chemin ([[ch01-longueur-majoration-integrale]]).

## Énoncé

**Proposition (poly, Exemple II.6.1, p. 48).** Pour $k>0$ et $a>0$,
$$
I=\int_{-\infty}^{+\infty}\frac{\cos(kx)}{x^2+a^2}\,dx=\frac{\pi}{a}e^{-ka}.
$$
Plus précisément, $\displaystyle\int_{-\infty}^{+\infty}\frac{e^{ikx}}{x^2+a^2}\,dx=\frac{\pi}{a}e^{-ka}$, et l'on obtient $I$ en prenant la partie réelle.

## Hypothèses

### H1 — $k>0$

**Rôle.** Sur le demi-cercle supérieur $z=Re^{i\theta}$, $\theta\in[0,\pi]$, on a $|e^{ikz}|=e^{-kR\sin\theta}\le1$ **parce que** $k\,\Im z\ge0$. C'est ce qui permet de tuer l'intégrale sur le demi-cercle.

**Si on la retire.** Pour $k<0$, la formule annoncée est **fausse** : $\frac{\pi}{a}e^{-ka}=\frac\pi ae^{|k|a}>\frac\pi a$, alors que $|I|\le\int_\R\frac{dx}{x^2+a^2}=\frac\pi a$. La vraie valeur, par parité de $\cos$, est $\frac\pi ae^{-|k|a}$. Dans la méthode, c'est le demi-cercle qui casse : $|e^{ikz}|=e^{|k|R\sin\theta}$ explose. Il faut alors fermer par le demi-cercle **inférieur** (pôle $-ia$, contour parcouru dans le sens horaire, signe $-$) ou utiliser la parité. Le cas $k=0$ reste valable : $\int_\R\frac{dx}{x^2+a^2}=\frac\pi a$.

### H2 — $a>0$

**Rôle.** Les pôles $\pm ia$ ne sont pas sur l'axe réel (l'intégrale converge et le contour évite les pôles), et c'est $ia$, avec $a>0$, qui est dans le demi-plan supérieur.

**Si on la retire.** Si $a=0$, $\int_\R\frac{\cos(kx)}{x^2}dx$ diverge en $0$ (intégrande $\sim\frac1{x^2}$). Si $a<0$, l'intégrale ne dépend que de $a^2$ et vaut $\frac{\pi}{|a|}e^{-k|a|}>0$, alors que la formule donnerait $\frac\pi ae^{-ka}<0$ : l'erreur vient de ce que le pôle supérieur est alors $-ia$, pas $ia$.

## Idée de la preuve

Résidus de $f(z)=\frac{e^{ikz}}{z^2+a^2}$ sur le bord $\Gamma_R$ du demi-disque supérieur : un seul pôle intérieur $ia$, d'où $\int_{\Gamma_R}f=\frac\pi ae^{-ka}$. Sur le demi-cercle, $|f|\le\frac1{R^2-a^2}$ et la longueur est $\pi R$ : la contribution tend vers $0$. On passe à la limite puis à la partie réelle.

## Preuve

Soit $f(z)=\dfrac{e^{ikz}}{z^2+a^2}=\dfrac{e^{ikz}}{(z-ia)(z+ia)}$. C'est une fonction méromorphe sur $\C$ ([[ch02-meromorphes-operations]]), avec deux pôles simples $ia$ et $-ia$ (le numérateur ne s'annule pas).

*Le contour.* Pour $R>a$, soit $\Gamma_R$ le lacet formé du segment $[-R,R]$ parcouru de $-R$ à $R$, puis du demi-cercle supérieur $C_R^+:\theta\mapsto Re^{i\theta}$, $\theta\in[0,\pi]$. C'est le bord, orienté dans le sens direct, du demi-disque $U_R=\{|z|<R,\ \Im z>0\}$, qui est un ouvert connexe borné ; $\Omega=\C$ est simplement connexe et contient $\bar U_R$ ; $f$ n'a pas de pôle sur $\Gamma_R$ (car $a<R$ et $a\neq0$). Le seul pôle dans $U_R$ est $ia$ ($-ia$ est dans le demi-plan inférieur). La forme pratique de la formule des résidus ([[ch02-formule-residus-pratique]]) donne
$$
\int_{\Gamma_R}f(z)\,dz=2i\pi\,\Res_{ia}(f).
$$

*Le résidu.* $f=\varphi\cdot g$ avec $\varphi(z)=\frac{e^{ikz}}{z+ia}$ holomorphe au voisinage de $ia$ et $g(z)=\frac1{z-ia}$, pôle simple de résidu $1$. Par [[ch02-residu-pole-simple]],
$$
\Res_{ia}(f)=\varphi(ia)=\lim_{z\to ia}(z-ia)\frac{e^{ikz}}{(z-ia)(z+ia)}=\frac{e^{ik(ia)}}{2ia}=\frac{e^{-ka}}{2ia},
$$
d'où $\displaystyle\int_{\Gamma_R}f=2i\pi\frac{e^{-ka}}{2ia}=\frac\pi ae^{-ka}$, pour tout $R>a$.

*Décomposition.* Par additivité de l'intégrale sur un chemin composé ([[ch01-integrale-reparametrage-oppose-concatenation]]),
$$
\int_{\Gamma_R}f(z)\,dz=\int_{-R}^R\frac{e^{ikx}}{x^2+a^2}\,dx+\int_{C_R^+}\frac{e^{ikz}}{z^2+a^2}\,dz .
$$

*Le demi-cercle.* Pour $z=Re^{i\theta}$, $\theta\in[0,\pi]$ : $\Im z=R\sin\theta\ge0$ et $k>0$, donc $|e^{ikz}|=e^{-k\Im z}=e^{-kR\sin\theta}\le1$ ; et $|z^2+a^2|\ge|z|^2-a^2=R^2-a^2>0$. La longueur de $C_R^+$ est $\pi R$, donc ([[ch01-longueur-majoration-integrale]])
$$
\Big|\int_{C_R^+}\frac{e^{ikz}}{z^2+a^2}\,dz\Big|\le\pi R\cdot\frac{1}{R^2-a^2}\xrightarrow[R\to+\infty]{}0 .
$$

*Passage à la limite.* La fonction $x\mapsto\frac{e^{ikx}}{x^2+a^2}$ est intégrable sur $\R$ (module majoré par $\frac1{x^2+a^2}$, intégrable), donc $\int_{-R}^R\to\int_{-\infty}^{+\infty}$. En faisant $R\to+\infty$ dans la décomposition :
$$
\int_{-\infty}^{+\infty}\frac{e^{ikx}}{x^2+a^2}\,dx=\frac\pi ae^{-ka}.
$$
Comme $e^{ikx}=\cos(kx)+i\sin(kx)$ et que $x^2+a^2$ est réel, la partie réelle du membre de gauche est $I$ ; celle du membre de droite est $\frac\pi ae^{-ka}$. D'où $I=\frac\pi ae^{-ka}$. (La partie imaginaire donne $\int_\R\frac{\sin(kx)}{x^2+a^2}dx=0$, ce que confirme l'imparité.) $\square$

## Preuve à trous

On pose <trou indice="pas cos(kz) !">$f(z)=\dfrac{e^{ikz}}{z^2+a^2}$, méromorphe sur $\C$, pôles simples $\pm ia$</trou>, et l'on intègre sur le bord $\Gamma_R$ du demi-disque supérieur, $R>a$. Le seul pôle intérieur est $ia$ et <trou indice="pôle simple : limite de (z−ia)f(z)">$\Res_{ia}(f)=\frac{e^{-ka}}{2ia}$</trou>, donc $\int_{\Gamma_R}f=\frac\pi ae^{-ka}$. Sur $C_R^+$, <trou indice="à quoi sert le signe de k ?">$|e^{ikz}|=e^{-kR\sin\theta}\le1$ et $|z^2+a^2|\ge R^2-a^2$</trou>, d'où $\big|\int_{C_R^+}f\big|\le\frac{\pi R}{R^2-a^2}\to0$. En faisant $R\to+\infty$, $\int_\R\frac{e^{ikx}}{x^2+a^2}dx=\frac\pi ae^{-ka}$, et <trou>on prend la partie réelle</trou>. $\square$

## Exemples

* **Valeurs numériques.** $k=a=1$ : $\displaystyle\int_\R\frac{\cos x}{1+x^2}dx=\frac\pi e\approx1{,}156$. $k=2$, $a=2$ : $\displaystyle\int_\R\frac{\cos 2x}{x^2+4}dx=\frac\pi2e^{-4}$. Par parité, $\displaystyle\int_0^{+\infty}\frac{\cos(kx)}{x^2+a^2}dx=\frac{\pi}{2a}e^{-ka}$.
* **Transformée de Fourier.** Pour tout $\xi\in\R$, $\displaystyle\int_\R\frac{e^{-i\xi x}}{x^2+a^2}dx=\frac\pi ae^{-a|\xi|}$ : pour $\xi\neq0$ c'est la formule précédente avec $k=|\xi|$ (la partie en $\sin$ est nulle par imparité), et pour $\xi=0$ c'est $\frac\pi a$. La transformée de Fourier d'une lorentzienne est une exponentielle décroissante, non dérivable en $\xi=0$ (reflet de la décroissance seulement en $1/x^2$).
* **Variante où la majoration grossière échoue : $\int_\R\frac{x\sin(kx)}{x^2+a^2}dx=\pi e^{-ka}$ ($k,a>0$).** Avec $f(z)=\frac{ze^{ikz}}{z^2+a^2}$, $\Res_{ia}(f)=\frac{ia\,e^{-ka}}{2ia}=\frac{e^{-ka}}2$, donc $\int_{\Gamma_R}f=i\pi e^{-ka}$. Mais sur $C_R^+$, $|f|\le\frac{R}{R^2-a^2}$ et la majoration $\pi R\cdot\frac{R}{R^2-a^2}$ ne tend **pas** vers $0$. Il faut garder $e^{-kR\sin\theta}$ et utiliser $\sin\theta\ge\frac{2\theta}\pi$ sur $[0,\frac\pi2]$ (lemme de Jordan) : $\int_0^\pi e^{-kR\sin\theta}d\theta\le2\int_0^{\pi/2}e^{-2kR\theta/\pi}d\theta\le\frac\pi{kR}$, d'où $\big|\int_{C_R^+}f\big|\le\frac{R^2}{R^2-a^2}\cdot\frac{\pi}{kR}\to0$. On obtient $\lim_{R\to\infty}\int_{-R}^R\frac{xe^{ikx}}{x^2+a^2}dx=i\pi e^{-ka}$ et, en prenant la partie imaginaire, l'intégrale (seulement semi-convergente) vaut $\pi e^{-ka}$.

## Pièges

* > ⚠️ Ne **pas** intégrer $\frac{\cos(kz)}{z^2+a^2}$ : $|\cos(kz)|\ge\sinh(k\Im z)$ croît comme $\frac12e^{kR\sin\theta}$ sur le demi-cercle, qui ne tend plus vers $0$. On passe par $e^{ikz}$ et on prend la partie réelle **à la fin**.
* > ⚠️ Le signe de $k$ décide du demi-plan : $e^{ikz}$ est bornée là où $k\Im z\ge0$. Pour $k<0$, fermer par le bas, où le contour est parcouru dans le sens horaire (signe $-$) et où le pôle est $-ia$.
* Exiger $R>a$ : sinon le pôle $ia$ n'est pas dans le demi-disque (et pour $R=a$ il est sur le contour).
* Vérifier que $\int_{-R}^R$ tend bien vers l'intégrale cherchée : ici l'intégrale converge absolument ; dans la variante $x\sin(kx)$, on obtient seulement la limite des $\int_{-R}^R$ (valeur principale à l'infini), qui coïncide avec l'intégrale impropre parce que celle-ci converge.
* Le résidu en $ia$ vaut $\frac{e^{-ka}}{2ia}$ et non $\frac{e^{-ka}}{2a}$ : c'est le facteur $i$ qui compense le $2i\pi$ et rend le résultat réel, bon test de vraisemblance.
