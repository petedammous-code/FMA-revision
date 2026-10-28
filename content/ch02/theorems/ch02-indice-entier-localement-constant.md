---
id: ch02-indice-entier-localement-constant
type: proposition
chapter: 2
title: L'indice est un entier, constant sur les composantes connexes de $\C\setminus\Gamma$, nul sur la composante non bornée
ref: Proposition II.3.2
page: 40
importance: 3
depends: [ch02-indice-def, ch01-def-chemin-lacet, ch01-chemin-c1-par-morceaux-derivee-bornee, ch01-longueur-majoration-integrale, ch01-exp-trigo-hyperboliques]
tags: [indice, lacet, entier, composantes connexes, nombre de tours]
---
## Intuition

> 💡 L'indice $\Ind_z(\gamma)=\dfrac1{2i\pi}\displaystyle\int_\gamma\frac{\dd w}{w-z}$ ([[ch02-indice-def]]) compte **algébriquement le nombre de tours** que le lacet $\gamma$ fait autour du point $z$ : $+1$ par tour dans le sens trigonométrique, $-1$ par tour dans le sens horaire. Un nombre de tours est forcément un entier, et il ne change pas quand on déplace un peu le point $z$ sans traverser la courbe.

Pourquoi un entier ? Formellement, $\int_\gamma \frac{\dd w}{w-z}$ « devrait » valoir $\log(\gamma(1)-z)-\log(\gamma(0)-z)=0$ ; mais le logarithme complexe n'est défini qu'à $2i\pi$ près, et c'est précisément ce défaut qui fait apparaître un multiple entier de $2i\pi$ : la variation totale de l'argument de $\gamma(t)-z$ le long du lacet. La preuve évite le logarithme en passant par l'exponentielle, qui, elle, est bien définie.

Image mentale : $\C\setminus\Gamma$ (le plan privé de la courbe) se découpe en « pièces » (ses composantes connexes) ; sur chaque pièce l'indice est une constante entière ; la pièce extérieure, infinie, porte l'indice $0$ (figure du poly p. 42).

Rappels : un **lacet** est un chemin $\gamma:[0,1]\to\C$ continu, $C^1$ par morceaux, avec $\gamma(0)=\gamma(1)$ ([[ch01-def-chemin-lacet]]) ; $\Gamma=\gamma([0,1])$ est son image ; une **composante connexe** d'un ouvert $U$ est une partie connexe maximale de $U$ (c'est un ouvert de $\C$).

## Énoncé

**Proposition (poly, Proposition II.3.2, p. 40).** Soit $\gamma:[0,1]\to\C$ un lacet dans $\C$ dont on note $\Gamma$ l'image. Alors pour tout $z\in\C\setminus\Gamma$, $\Ind_z(\gamma)$ est dans $\Z$. La fonction $z\mapsto\Ind_z(\gamma)$ est constante sur les composantes connexes de $\C\setminus\Gamma$. Elle est nulle sur l'unique composante connexe non bornée.

## Hypothèses

### H1 — $\gamma$ est un lacet ($\gamma(0)=\gamma(1)$)

**Rôle.** C'est l'égalité $\gamma(1)=\gamma(0)$ qui donne $f(1)=1$ dans la preuve, donc $e^{2i\pi\Ind_{z_0}(\gamma)}=1$. Sans elle, l'intégrale mesure la variation d'argument entre deux points distincts, qui n'a aucune raison d'être un multiple de $2\pi$.

**Si on la retire.** Pour le segment $\gamma(t)=(1-t)+it$, $t\in[0,1]$, qui va de $1$ à $i$, et $z_0=0$ : le segment est contenu dans $\C\setminus\R_-$, où la détermination principale du logarithme $\log$ ([[ch02-logarithme-determination-principale-def]]) est une primitive holomorphe de $1/w$ ; l'intégrale se calcule donc avec cette primitive ([[ch01-integrale-primitive]]). Donc $\int_\gamma\frac{\dd w}{w}=\log(i)-\log(1)=\frac{i\pi}2$ et
$$
\frac1{2i\pi}\int_\gamma\frac{\dd w}{w}=\frac1{2i\pi}\cdot\frac{i\pi}{2}=\frac14\notin\Z .
$$

### H2 — $z\notin\Gamma$

**Rôle.** L'intégrande $\gamma'(t)/(\gamma(t)-z)$ doit être défini et borné : $\gamma(t)-z$ ne s'annule pas et, par compacité, $|\gamma(t)-z|\ge\dist(z,\Gamma)>0$. C'est aussi ce qui donne la continuité de $z\mapsto\Ind_z(\gamma)$.

**Si on la retire.** Pour le cercle unité $\gamma(t)=e^{2i\pi t}$ et $z=1\in\Gamma$ : $\dfrac{\gamma'(t)}{\gamma(t)-1}=\dfrac{2i\pi e^{2i\pi t}}{e^{2i\pi t}-1}$ est équivalent à $\dfrac1t$ quand $t\to0^+$ : l'intégrale diverge, l'indice n'est pas défini.

### H3 — $\gamma$ est $C^1$ par morceaux

**Rôle.** Hypothèse de confort, incluse dans la définition de chemin du poly : elle rend l'intégrale $\int_0^1\frac{\gamma'(t)}{\gamma(t)-z}\,\dd t$ définie, avec $\gamma'$ bornée ([[ch01-chemin-c1-par-morceaux-derivee-bornee]]), et permet le calcul de $f'/f$ dans la preuve.

**Si on la retire.** La conclusion reste vraie mais la définition change : pour un lacet seulement continu, on définit l'indice par relèvement continu de l'argument de $\gamma(t)-z$ (hors programme) ; les propriétés de l'énoncé subsistent.

## Idée de la preuve

On pose $f(t)=\exp\big(\int_0^t\frac{\gamma'(u)}{\gamma(u)-z_0}\dd u\big)$ et on vérifie que $f(t)/(\gamma(t)-z_0)$ est constant : $f(1)=1$ force $2i\pi\Ind_{z_0}(\gamma)\in2i\pi\Z$. Puis continuité de $z\mapsto\Ind_z(\gamma)$ et « continue à valeurs entières $\Rightarrow$ localement constante ». Enfin $|\Ind_z(\gamma)|\le\frac{L(\gamma)}{2\pi\,\dist(z,\Gamma)}\to0$ à l'infini.

## Preuve

**Étape 1 : l'indice est entier.** Fixons $z_0\in\C\setminus\Gamma$ et posons, pour $t\in[0,1]$,
$$
f(t):=\exp\left(\int_0^t\frac{\gamma'(u)}{\gamma(u)-z_0}\,\dd u\right).
$$
L'intégrande est continu par morceaux et borné (car $\gamma'$ est bornée et $|\gamma(u)-z_0|\ge\dist(z_0,\Gamma)>0$, $\Gamma$ étant compact), donc $f$ est continue sur $[0,1]$, $C^1$ par morceaux, avec $f(0)=1$ et, sauf aux points (en nombre fini) où $\gamma$ n'est pas $C^1$,
$$
f'(t)=\frac{\gamma'(t)}{\gamma(t)-z_0}\,f(t),\qquad\text{soit}\qquad \frac{f'}{f}=\frac{(\gamma-z_0)'}{\gamma-z_0}.
$$
Considérons $\varphi(t):=\dfrac{f(t)}{\gamma(t)-z_0}$, continue sur $[0,1]$ et $C^1$ par morceaux. En dehors des points exceptionnels,
$$
\varphi'(t)=\frac{f'(t)\,(\gamma(t)-z_0)-f(t)\,\gamma'(t)}{(\gamma(t)-z_0)^2}=\frac{f(t)\gamma'(t)-f(t)\gamma'(t)}{(\gamma(t)-z_0)^2}=0 .
$$
Une fonction continue, $C^1$ par morceaux et de dérivée nulle sur chaque morceau est constante sur chaque morceau, donc (par continuité aux points de raccord) constante sur $[0,1]$. Ainsi
$$
\frac{f(t)}{\gamma(t)-z_0}=\frac{f(0)}{\gamma(0)-z_0}=\frac1{\gamma(0)-z_0}\qquad(t\in[0,1]).
$$
En $t=1$, comme $\gamma(1)=\gamma(0)$, on obtient $f(1)=\dfrac{\gamma(1)-z_0}{\gamma(0)-z_0}=1$. Or, par définition de l'indice ([[ch02-indice-def]]), $f(1)=\exp\big(2i\pi\Ind_{z_0}(\gamma)\big)$. Comme $e^w=1$ si et seulement si $w\in2i\pi\Z$ ([[ch01-exp-trigo-hyperboliques]]), on conclut $\Ind_{z_0}(\gamma)\in\Z$.

**Étape 2 : continuité de $z\mapsto\Ind_z(\gamma)$ sur $\C\setminus\Gamma$.** Soit $z_0\in\C\setminus\Gamma$ et $d:=\dist(z_0,\Gamma)>0$. Pour $|z-z_0|<d/2$ et $t\in[0,1]$, $|\gamma(t)-z|\ge|\gamma(t)-z_0|-|z-z_0|>d/2$, donc
$$
\left|\frac{\gamma'(t)}{\gamma(t)-z}-\frac{\gamma'(t)}{\gamma(t)-z_0}\right|=\frac{|\gamma'(t)|\,|z-z_0|}{|\gamma(t)-z|\,|\gamma(t)-z_0|}\le\frac{2\sup|\gamma'|}{d^2}\,|z-z_0| ,
$$
et en intégrant sur $[0,1]$ : $|\Ind_z(\gamma)-\Ind_{z_0}(\gamma)|\le\dfrac{\sup|\gamma'|}{\pi d^2}\,|z-z_0|\xrightarrow[z\to z_0]{}0$. (Le poly invoque le théorème de continuité d'une intégrale à paramètre ; on peut même montrer que l'indice est holomorphe en $z$, cf. [[ch01-holomorphie-sous-integrale]].)

**Étape 3 : constance sur les composantes connexes.** Soit $U$ une composante connexe de $\C\setminus\Gamma$. L'image de $U$ par l'application continue $z\mapsto\Ind_z(\gamma)$ est une partie connexe de $\C$ contenue dans $\Z$. Or une partie connexe de $\Z$ ayant deux points $p<q$ serait coupée en deux ouverts disjoints non vides par $\{\Re(w)<p+\tfrac12\}$ et $\{\Re(w)>p+\tfrac12\}$ : elle est donc réduite à un point. L'indice est constant sur $U$.

**Étape 4 : unicité de la composante non bornée et nullité de l'indice.** $\Gamma$ est compact (image du compact $[0,1]$ par une application continue), donc contenu dans un disque fermé $\bar D(0,R)$. L'ensemble $\{|z|>R\}$ est connexe et disjoint de $\Gamma$, donc contenu dans une seule composante connexe $U_\infty$ de $\C\setminus\Gamma$ ; toute autre composante est contenue dans $\bar D(0,R)$, donc bornée : $U_\infty$ est l'unique composante non bornée. Pour $|z|>R$, la majoration fondamentale ([[ch01-longueur-majoration-integrale]]) donne
$$
|\Ind_z(\gamma)|\le\frac1{2\pi}\,\sup_{w\in\Gamma}\frac1{|w-z|}\;L(\gamma)\le\frac{L(\gamma)}{2\pi(|z|-R)}\xrightarrow[|z|\to+\infty]{}0 ,
$$
où $L(\gamma)=\int_0^1|\gamma'(t)|\,\dd t$ est la longueur de $\gamma$. L'indice étant entier et constant sur $U_\infty$, il est nul sur $U_\infty$ (prendre $|z|$ assez grand pour que le majorant soit $<1$). $\square$

## Preuve à trous

Fixons $z_0\notin\Gamma$ et posons <trou indice="on veut une fonction bien définie qui joue le rôle de exp(log(γ−z0))">$f(t):=\exp\Big(\int_0^t\frac{\gamma'(u)}{\gamma(u)-z_0}\dd u\Big)$</trou>, continue, $C^1$ par morceaux, $f(0)=1$, et $f'/f=(\gamma-z_0)'/(\gamma-z_0)$ sauf en un nombre fini de points. On en déduit que <trou indice="dériver un quotient">$t\mapsto f(t)/(\gamma(t)-z_0)$ a une dérivée nulle, donc est constante, égale à $1/(\gamma(0)-z_0)$</trou>. En $t=1$ : $f(1)=\dfrac{\gamma(1)-z_0}{\gamma(0)-z_0}=1$ car $\gamma$ est un lacet, et $f(1)=e^{2i\pi\Ind_{z_0}(\gamma)}$ ; donc $\Ind_{z_0}(\gamma)\in\Z$.

Ensuite, pour $|z-z_0|<d/2$ avec $d=\dist(z_0,\Gamma)$, on a $|\gamma(t)-z|>d/2$ et <trou indice="majorer la différence des intégrandes">$|\Ind_z(\gamma)-\Ind_{z_0}(\gamma)|\le\frac{\sup|\gamma'|}{\pi d^2}|z-z_0|$</trou> : l'indice est continu en $z$. Étant <trou indice="image continue d'un connexe">continu à valeurs dans $\Z$, il est constant sur chaque composante connexe de $\C\setminus\Gamma$ (l'image d'un connexe est un connexe de $\Z$, donc un singleton)</trou>.

Enfin $\Gamma\subset\bar D(0,R)$ ; $\{|z|>R\}$ est connexe, donc contenu dans une seule composante, la seule non bornée. Pour $|z|>R$, <trou indice="majoration fondamentale de l'intégrale">$|\Ind_z(\gamma)|\le\frac{L(\gamma)}{2\pi(|z|-R)}\to0$</trou>, et un entier constant qui tend vers $0$ est nul. $\square$

## Exemples

* **Cercle parcouru une fois.** $\gamma(t)=a+re^{2i\pi t}$, $z=a$ : $\Ind_a(\gamma)=\dfrac1{2i\pi}\displaystyle\int_0^1\frac{2i\pi\,re^{2i\pi t}}{re^{2i\pi t}}\dd t=1$. Par connexité du disque $D(a,r)$, l'indice vaut $1$ en tout point de $D(a,r)$, et $0$ pour $|z-a|>r$ (composante non bornée) : voir [[ch02-indice-cercle]].
* **Cercle parcouru deux fois.** $\gamma(t)=e^{4i\pi t}$, $t\in[0,1]$ : $\Ind_0(\gamma)=\dfrac1{2i\pi}\displaystyle\int_0^1\frac{4i\pi e^{4i\pi t}}{e^{4i\pi t}}\dd t=2$. Même image $\Gamma$ que le cercle unité, mais indice $2$ sur $D(0,1)$ : l'indice dépend du lacet, pas seulement de son image.
* **Une composante bornée d'indice nul.** Soit $\gamma$ le lacet obtenu en parcourant $C(0,2)$ dans le sens direct, puis le segment $[2,1]$, puis $C(0,1)$ dans le sens **indirect**, puis le segment $[1,2]$. Les deux segments se compensent. Pour $|z|<1$ : $\Ind_z(\gamma)=1+(-1)=0$ ; pour $1<|z|<2$ : $\Ind_z(\gamma)=1+0=1$ ; pour $|z|>2$ : $0$. La composante bornée $D(0,1)$ a un indice nul : « indice nul » n'implique pas « à l'extérieur ».

## Pièges

* > ⚠️ L'indice dépend de l'**orientation** : $\Ind_z(\gamma^{opp})=-\Ind_z(\gamma)$. Un cercle parcouru dans le sens horaire a pour indice $-1$ à l'intérieur.
* L'indice n'est **pas** défini sur $\Gamma$ : avant de l'invoquer, vérifier $z\notin\Gamma$.
* « Constante sur les composantes connexes » ne veut pas dire « constante sur $\C\setminus\Gamma$ » : les valeurs diffèrent d'une composante à l'autre (ex. $1$ à l'intérieur d'un cercle, $0$ à l'extérieur).
* L'indice peut être nul sur une composante **bornée** (troisième exemple) et prendre des valeurs $\ge2$ ou $\le-1$ : ne pas croire qu'il vaut toujours $0$ ou $1$. Il vaut $\pm1$ sur l'intérieur seulement pour un lacet **simple** ([[ch02-jordan-remarque]]).
* La preuve n'utilise pas de logarithme global de $\gamma-z_0$ (il n'en existe pas en général) : c'est l'exponentielle d'une intégrale qui remplace $\exp\circ\log$.
