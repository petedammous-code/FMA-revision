---
id: ch01-longueur-majoration-integrale
type: proposition
chapter: 1
title: "Longueur $L(\gamma)$ et majoration fondamentale $|\int_\gamma f\,dz|\le\sup_\gamma|f|\cdot L(\gamma)$"
ref: Proposition I.5.7
page: 16
importance: 3
depends: [ch01-def-integrale-chemin, ch01-chemin-c1-par-morceaux-derivee-bornee]
tags: [longueur, majoration, inegalite-ml, integrale-curviligne, estimation]
---
## Intuition

> 💡 L'intégrale $\int_\gamma f(z)\,dz$ est une somme de termes $f(\gamma(t_k))\,\Delta z_k$. Chaque terme a un module au plus $(\max|f|)\times|\Delta z_k|$, et la somme des $|\Delta z_k|$ est la **longueur** du trajet. Donc : $|\text{intégrale}|\le(\text{max de }|f|\text{ sur le chemin})\times(\text{longueur})$. C'est l'inégalité « $M\times L$ ».

C'est l'outil d'estimation n°1 du cours : il sert à démontrer les estimées de Cauchy ([[ch01-estimees-cauchy]]) et donc Liouville ([[ch01-liouville]]), et à montrer au chapitre II que les intégrales sur de grands demi-cercles tendent vers $0$. La **vitesse** d'un chemin est $|\gamma'(t)|$ ; sa longueur est l'intégrale de la vitesse, comme la distance parcourue par une voiture est l'intégrale de la lecture du compteur. Rappels : chemin ([[ch01-def-chemin-lacet]]), intégrale le long d'un chemin ([[ch01-def-integrale-chemin]]).

## Énoncé

**Proposition (poly, Proposition I.5.7, p. 16).** Soit $\gamma:[a,b]\to\Omega$ un chemin. On appelle **longueur** de $\gamma$ le nombre
$$
L(\gamma):=\int_a^b|\gamma'(t)|\,dt,
$$
qui est fini car $\gamma'$ est bornée ([[ch01-chemin-c1-par-morceaux-derivee-bornee]]). Alors, pour toute fonction continue $f$ sur $\Omega$, on a
$$
\text{(I.5.1)}\qquad\Bigl|\int_\gamma f(z)\,dz\Bigr|\le\Bigl(\sup_{t\in[a,b]}|f(\gamma(t))|\Bigr)\,L(\gamma).
$$
De plus (poly, p. 17), comme l'intégrale elle-même, la longueur $L(\gamma)$ ne dépend pas du paramétrage choisi : $L(\gamma\circ\varphi)=L(\gamma)$ pour tout $C^1$-difféomorphisme $\varphi:[\tilde a,\tilde b]\to[a,b]$ (et l'on a aussi $L(\gamma^{opp})=L(\gamma)$).

## Hypothèses

### H1 — $f$ continue sur $\Omega$

**Rôle.** $f\circ\gamma$ est continue sur le compact $[a,b]$, donc le $\sup$ est fini (et atteint) ; et l'intégrale est définie ([[ch01-def-integrale-chemin]]).

**Si on la retire.** Si $f$ n'est pas bornée sur l'image de $\gamma$, le majorant vaut $+\infty$ et l'inégalité ne dit rien (l'intégrale peut d'ailleurs ne pas exister, cf. $\frac1{z-1}$ sur $C(0,1)$ dans [[ch01-integrale-sur-cercle]]).

### H2 — $\gamma$ est un chemin ($C^1$ par morceaux, donc $\gamma'$ bornée)

**Rôle.** $\gamma'$ bornée (par $K$, disons) donne $L(\gamma)\le K(b-a)<+\infty$ : le majorant est un nombre fini.

**Si on la retire.** La « spirale » $\gamma(t)=te^{i/t}$ pour $t\in]0,1]$, $\gamma(0)=0$, est continue sur $[0,1]$ (car $|\gamma(t)|=t$) et $C^1$ sur $]0,1]$, mais $\gamma'(t)=e^{i/t}\bigl(1-\tfrac{i}{t}\bigr)$ n'est pas bornée : $|\gamma'(t)|=\sqrt{1+1/t^2}\ge 1/t$, donc $\int_0^1|\gamma'(t)|\,dt=+\infty$. Ce n'est pas un chemin au sens du poly, sa longueur est infinie (elle tourne une infinité de fois autour de $0$), et l'inégalité (I.5.1) n'apporte plus aucune information.

## Idée de la preuve

Inégalité triangulaire pour les intégrales $|\int g|\le\int|g|$, puis on majore $|f(\gamma(t))|$ par son sup et on reconnaît $\int_a^b|\gamma'(t)|\,dt=L(\gamma)$. L'invariance de $L$ est un changement de variable.

## Preuve

**Inégalité triangulaire intégrale.** Pour $g:[a,b]\to\C$ continue par morceaux, $\bigl|\int_a^bg(t)\,dt\bigr|\le\int_a^b|g(t)|\,dt$. En effet, soit $I=\int_a^bg$ ; si $I=0$ c'est clair ; sinon écrivons $I=|I|e^{i\theta}$. Alors, par $\C$-linéarité de l'intégrale,
$$
|I|=e^{-i\theta}I=\int_a^b e^{-i\theta}g(t)\,dt=\int_a^b\Re\bigl(e^{-i\theta}g(t)\bigr)\,dt\le\int_a^b|g(t)|\,dt,
$$
où l'on a utilisé que $|I|$ est réel (donc égal à sa partie réelle, et la partie réelle de l'intégrale est l'intégrale de la partie réelle) et $\Re w\le|w|$.

**Preuve de (I.5.1) (poly).** Posons $M=\sup_{t\in[a,b]}|f(\gamma(t))|$, fini car $f\circ\gamma$ est continue sur le compact $[a,b]$. Il suffit d'écrire, avec $g(t)=f(\gamma(t))\gamma'(t)$,
$$
\Bigl|\int_\gamma f(z)\,dz\Bigr|=\Bigl|\int_a^b f(\gamma(t))\,\gamma'(t)\,dt\Bigr|\le\int_a^b|f(\gamma(t))|\,|\gamma'(t)|\,dt\le\Bigl(\sup_{t\in[a,b]}|f(\gamma(t))|\Bigr)\int_a^b|\gamma'(t)|\,dt=M\,L(\gamma).
$$

**Invariance de la longueur** (affirmée sans preuve dans le poly). Soit $\varphi:[\tilde a,\tilde b]\to[a,b]$ un $C^1$-difféomorphisme et $\tilde\gamma=\gamma\circ\varphi$. Sur chaque morceau (comme dans la preuve de [[ch01-integrale-reparametrage-oppose-concatenation]]), $\tilde\gamma'(s)=\gamma'(\varphi(s))\varphi'(s)$, donc $|\tilde\gamma'(s)|=|\gamma'(\varphi(s))|\,|\varphi'(s)|$. Si $\varphi$ est croissante, $|\varphi'|=\varphi'$ et le changement de variable $t=\varphi(s)$ donne $\int_{\tilde a}^{\tilde b}|\gamma'(\varphi(s))|\varphi'(s)\,ds=\int_a^b|\gamma'(t)|\,dt$. Si $\varphi$ est décroissante, $|\varphi'|=-\varphi'$, $\varphi(\tilde a)=b$, $\varphi(\tilde b)=a$, et $\int_{\tilde a}^{\tilde b}|\gamma'(\varphi(s))|(-\varphi'(s))\,ds=-\int_b^a|\gamma'(t)|\,dt=\int_a^b|\gamma'(t)|\,dt$. Dans les deux cas $L(\tilde\gamma)=L(\gamma)$ ; le cas $\gamma^{opp}=\gamma\circ\varphi$ avec $\varphi(t)=a+b-t$ en est un cas particulier. $\square$

## Preuve à trous

Soit $M=\sup_{t\in[a,b]}|f(\gamma(t))|$, fini car <trou indice="pourquoi le sup est-il fini ?">$f\circ\gamma$ est continue sur le compact $[a,b]$</trou>. On a
$$
\Bigl|\int_\gamma f(z)\,dz\Bigr|=\Bigl|\int_a^b f(\gamma(t))\gamma'(t)\,dt\Bigr|\le\int_a^b|f(\gamma(t))|\,|\gamma'(t)|\,dt\le M\int_a^b|\gamma'(t)|\,dt=M\,L(\gamma),
$$
où la première inégalité est l'inégalité triangulaire intégrale, que l'on prouve en écrivant $I=\int_a^bg=|I|e^{i\theta}$ et <trou indice="se ramener à une intégrale réelle">$|I|=\int_a^b\Re\bigl(e^{-i\theta}g(t)\bigr)\,dt\le\int_a^b|g(t)|\,dt$</trou>.

Pour l'invariance de la longueur, avec $\tilde\gamma=\gamma\circ\varphi$ : $|\tilde\gamma'(s)|=$ <trou indice="dérivée d'une composée, puis module">$|\gamma'(\varphi(s))|\,|\varphi'(s)|$</trou>, et le changement de variable $t=\varphi(s)$ redonne $\int_a^b|\gamma'(t)|\,dt$ (que $\varphi$ soit croissante ou décroissante, grâce à la valeur absolue). $\square$

## Exemples

* **Longueurs usuelles.** Segment $\gamma(t)=z_1+t(z_2-z_1)$, $t\in[0,1]$ : $L=\int_0^1|z_2-z_1|\,dt=|z_2-z_1|$. Cercle $\gamma(t)=z_0+re^{it}$, $t\in[0,2\pi]$ : $|\gamma'(t)|=r$, $L=2\pi r$.
* **Estimée de Cauchy (aperçu).** Si $f$ est continue sur un ouvert contenant $C(z_0,r)$ et $|f|\le M$ sur ce cercle, alors sur le cercle $\bigl|\frac{f(z)}{(z-z_0)^2}\bigr|\le\frac{M}{r^2}$, donc
$$
\Bigl|\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(z)}{(z-z_0)^2}\,dz\Bigr|\le\frac1{2\pi}\cdot\frac{M}{r^2}\cdot2\pi r=\frac{M}{r}.
$$
Pour $f$ holomorphe, le membre de gauche est $|f'(z_0)|$ ([[ch01-estimees-cauchy]]) : on obtient $|f'(z_0)|\le M/r$.
* **Grand cercle, intégrande qui décroît.** Pour $R>1$ et $|z|=R$, $|z^2+1|\ge|z|^2-1=R^2-1$, donc
$$
\Bigl|\int_{C(0,R)}\frac{dz}{z^2+1}\Bigr|\le\frac{1}{R^2-1}\cdot2\pi R\xrightarrow[R\to+\infty]{}0.
$$
Même raisonnement sur le demi-cercle supérieur $t\mapsto Re^{it}$, $t\in[0,\pi]$ (longueur $\pi R$) pour $\frac{e^{iz}}{z^2+1}$, en utilisant $|e^{iz}|=e^{-\Im z}\le1$ quand $\Im z\ge0$ : majorant $\frac{\pi R}{R^2-1}\to0$. C'est le schéma type des calculs d'intégrales par résidus (chapitre II).

## Pièges

* > ⚠️ L'inégalité est **large** et souvent stricte : $\int_{C(0,1)}1\,dz=0$ alors que $\sup|f|\cdot L=2\pi$. Le module d'une intégrale n'est pas l'intégrale du module (compensations de phase).
* Le $\sup$ porte sur **l'image du chemin** $\gamma([a,b])$, pas sur tout $\Omega$ ni sur le disque intérieur : il faut minorer le dénominateur **sur le chemin** (comme $|z^2+1|\ge R^2-1$ sur $|z|=R$).
* Pour minorer un module de différence, utiliser $|z^2+1|\ge\bigl||z|^2-1\bigr|$ (inégalité triangulaire renversée) et non $|z^2+1|\ge|z|^2+1$, qui est **faux** (prendre $z=i$).
* $L(\gamma)$ compte les tours : le cercle parcouru deux fois ($t\in[0,4\pi]$) a pour longueur $4\pi r$, pas $2\pi r$.
