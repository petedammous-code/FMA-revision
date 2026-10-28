---
id: ch02-schwarz-reflexion
type: theorem
chapter: 2
title: Principe de réflexion de Schwarz
ref: Exercice II.7.9
page: 51
importance: 2
depends: [ch01-morera, ch02-cauchy-simplement-connexe, ch02-etoile-simplement-connexe, ch01-cauchy-formule-disque, ch01-def-holomorphe, ch01-longueur-majoration-integrale]
tags: [schwarz, reflexion, prolongement, morera, conjugaison, segment reel]
---
## Intuition

> 💡 Un segment de droite est « trop fin » pour empêcher l'holomorphie : si une fonction est holomorphe au-dessus et au-dessous d'un segment réel et **continue à travers**, elle est holomorphe partout. Et si une fonction n'est définie que sur le demi-disque supérieur mais prend des **valeurs réelles** sur le diamètre, on peut la prolonger au demi-disque inférieur « en miroir » : on symétrise à la fois la variable ($z\mapsto\bar z$) et la valeur ($w\mapsto\bar w$).

Image mentale : posez un miroir sur l'axe réel du plan de départ **et** un miroir sur l'axe réel du plan d'arrivée. Une conjugaison seule renverse l'orientation (la fonction $z\mapsto f(\bar z)$ n'est pas holomorphe, sauf si $f$ est localement constante) ; deux conjugaisons se compensent, et $z\mapsto\overline{f(\bar z)}$ redevient holomorphe.

L'outil clé est le **théorème de Morera** ([[ch01-morera]]) : une fonction **continue** dont l'intégrale sur le bord de tout triangle plein contenu dans l'ouvert est nulle est holomorphe. Rappel : $f$ est **holomorphe** sur un ouvert $\Omega$ si elle est $\C$-dérivable en tout point avec $f'$ continue ([[ch01-def-holomorphe]]).

## Énoncé

Notations : $D=D(0,1)$ est le disque unité ouvert, $D^+=\{z\in D \mid \Im(z)\ge 0\}$ le demi-disque supérieur et $D^-=\{z\in D \mid \Im(z)\le 0\}$ le demi-disque inférieur (ils **contiennent** le diamètre $]-1,1[$).

**Théorème (poly, Exercice II.7.9, p. 51) — Principe de réflexion de Schwarz.**

1. On suppose que $f : D\to\C$ est continue sur $D$ et holomorphe sur $D\setminus\,]-1,1[$. Alors $f$ est holomorphe sur $D$.
2. Soit $f : D^+\to\C$ une fonction continue sur $D^+$, holomorphe sur $D^+\setminus\,]-1,1[$ et prenant des valeurs réelles sur $]-1,1[$. On définit $F$ sur $D$ par $F(z)=f(z)$ si $z\in D^+$ et $F(z)=\overline{f(\bar z)}$ si $z\in D^-$. Alors $F$ est holomorphe sur $D$.
3. (Généralisation demandée par le poly, rendue explicite.) Soit $\Omega$ un ouvert de $\C$ rencontrant $\R$.
   * (1') Si $f:\Omega\to\C$ est continue sur $\Omega$ et holomorphe sur $\Omega\setminus\R$, alors $f$ est holomorphe sur $\Omega$.
   * (2') Si de plus $\Omega$ est **stable par conjugaison** ($z\in\Omega\Rightarrow\bar z\in\Omega$), on pose $\Omega^+=\{z\in\Omega \mid \Im(z)\ge0\}$ et $\Omega^-=\{z\in\Omega \mid \Im(z)\le0\}$. Si $f:\Omega^+\to\C$ est continue sur $\Omega^+$, holomorphe sur $\Omega^+\setminus\R=\{z\in\Omega \mid \Im(z)>0\}$ et réelle sur $\Omega\cap\R$, alors la fonction $F$ définie par $F(z)=f(z)$ sur $\Omega^+$ et $F(z)=\overline{f(\bar z)}$ sur $\Omega^-$ est holomorphe sur $\Omega$.

Le cas $\Omega=D$ de 3. redonne 1. et 2. (car $D\setminus\,]-1,1[\;=D\setminus\R$ et $D$ est stable par conjugaison).

## Hypothèses

### H1 — Continuité à travers le segment réel

**Rôle.** C'est elle qui permet le passage à la limite $\eps\to0$ dans la preuve : l'intégrale sur le bord d'un triangle posé sur l'axe réel est la limite des intégrales sur les triangles translatés de $i\eps$, qui sont nulles. C'est aussi une hypothèse du théorème de Morera lui-même. Dans 2., elle sert à prouver que $F$ est continue.

**Si on la retire.** Soit $f:D\to\C$ définie par $f(z)=1$ si $\Im(z)>0$ et $f(z)=0$ si $\Im(z)\le0$. Elle est holomorphe (localement constante) sur $D\setminus\,]-1,1[$, mais elle n'est pas continue en $0$, donc pas holomorphe sur $D$. Pour 2. : $f=1$ sur $\{\Im(z)>0\}$ et $f=0$ sur $]-1,1[$ est holomorphe en haut, réelle sur le diamètre, mais $F$ vaut $1$ hors de l'axe et $0$ sur l'axe : $F$ n'est pas continue.

### H2 — Holomorphie hors d'un segment (un ensemble « mince »)

**Rôle.** Elle fournit, via le théorème de Cauchy sur un ouvert convexe, la nullité des intégrales sur les triangles qui ne touchent pas l'axe réel. La finesse de l'ensemble exceptionnel (un segment de droite) est ce qui permet de l'éviter en translatant les triangles.

**Si on la retire.** Si l'ensemble exceptionnel est « épais », la conclusion tombe. Avec $0<r<1$, posons $f(z)=\bar z$ si $|z|\le r$ et $f(z)=\dfrac{r^2}{z}$ si $r<|z|<1$. Sur le cercle $|z|=r$ on a $z\bar z=r^2$, donc $\bar z=r^2/z$ : $f$ est continue sur $D$, holomorphe hors du disque fermé $\bar D(0,r)$, mais pas holomorphe sur $D$ (sur $D(0,r)$ elle vaut $\bar z$, qui n'est $\C$-dérivable nulle part). A fortiori, sans aucune hypothèse d'holomorphie, $f(z)=\bar z$ est continue et non holomorphe.

### H3 — (pour 2.) Valeurs réelles sur le diamètre

**Rôle.** Sur $]-1,1[=D^+\cap D^-$, la fonction $F$ est définie deux fois : $F(x)=f(x)$ et $F(x)=\overline{f(\bar x)}=\overline{f(x)}$. Ces deux valeurs coïncident exactement quand $f(x)\in\R$. C'est ce qui rend $F$ bien définie et continue.

**Si on la retire.** $f(z)=i$ (constante) : la formule donne $F=i$ sur $D^+$ et $F=\overline{i}=-i$ sur $D^-$, contradictoire sur le diamètre ; même en choisissant une valeur sur l'axe, $F$ n'est pas continue. Autre exemple : $f(z)=iz$ donne $iz$ en haut et $\overline{i\bar z}=-iz$ en bas ; en $x\in\,]-1,1[$, $x\neq0$, les deux limites $ix\neq -ix$.

### H4 — (pour 2'.) $\Omega$ stable par conjugaison

**Rôle.** Pour $z\in\Omega^-$ il faut que $\bar z\in\Omega^+$ pour que $\overline{f(\bar z)}$ ait un sens.

**Si on la retire.** La formule n'a plus de sens en certains points. Pour $\Omega=D(-i/2,1)$ (qui rencontre $\R$), le point $z=-1{,}4i$ est dans $\Omega$ (à distance $0{,}9$ du centre) et dans $\Omega^-$, mais $\bar z=1{,}4i$ est à distance $1{,}9$ du centre, donc $\bar z\notin\Omega$ : $f(\bar z)$ n'est pas défini. On peut toujours appliquer (2') à la partie symétrique $\Omega\cap\bar\Omega$ (où $\bar\Omega=\{\bar z \mid z\in\Omega\}$), qui est un ouvert stable par conjugaison.

## Idée de la preuve

(1') Morera : un triangle coupé par l'axe réel se découpe en triangles situés d'un seul côté ; un tel triangle, translaté de $\pm i\eps$, vit dans un ouvert convexe où $f$ est holomorphe (intégrale nulle par Cauchy), et on fait $\eps\to0$ par continuité uniforme. (2') On vérifie que $F$ est continue et holomorphe hors de $\R$, puis on applique (1').

## Preuve

Le poly laisse la preuve en exercice ; on démontre directement les énoncés généraux (1') et (2'), dont 1. et 2. sont le cas $\Omega=D$.

**Étape 0 (Cauchy sur un convexe).** Si $U$ est un ouvert convexe et $g\in\Hol(U)$, alors $\int_\gamma g(z)\,dz=0$ pour tout lacet $\gamma$ de $U$. En effet un convexe est étoilé, donc simplement connexe ([[ch02-etoile-simplement-connexe]]), et l'on applique le théorème de Cauchy sur un ouvert simplement connexe ([[ch02-cauchy-simplement-connexe]]).

Notation : pour $a,b,c\in\C$, on note $T(a,b,c)$ le triangle plein (enveloppe convexe de $a,b,c$, éventuellement aplati) et
$$
I(a,b,c)=\int_{[a,b]}f(z)\,dz+\int_{[b,c]}f(z)\,dz+\int_{[c,a]}f(z)\,dz .
$$
On note $\partial T$ le lacet $[a,b]\vee[b,c]\vee[c,a]$ (bord du triangle), de sorte que $I(a,b,c)=\int_{\partial T}f(z)\,dz$.

**Étape 1 : triangles d'un seul côté de l'axe.** Soit $f$ comme dans (1'), et $T=T(a,b,c)\subset\Omega$ avec $T\subset\{\Im(z)\ge0\}$. Montrons $I(a,b,c)=0$.

Comme $T$ est compact et contenu dans l'ouvert $\Omega$, il existe $\delta>0$ tel que $K=\{z\in\C \mid \dist(z,T)\le\delta\}\subset\Omega$ (si $\Omega=\C$, prendre $\delta=1$). Soit $0<\eps<\delta/2$ et $T_\eps=T+i\eps$ le triangle translaté, de sommets $a+i\eps$, $b+i\eps$, $c+i\eps$. Posons
$$
U_\eps=\{z\in\C \mid \dist(z,T_\eps)<\eps\}.
$$
C'est un ouvert convexe (voisinage d'un convexe). Si $z\in U_\eps$, il existe $w\in T_\eps$ avec $|z-w|<\eps$, donc $\Im(z)>\Im(w)-\eps\ge0$, et $\dist(z,T)\le|z-(w-i\eps)|<2\eps<\delta$, donc $z\in\Omega$. Ainsi $U_\eps\subset\Omega\cap\{\Im(z)>0\}\subset\Omega\setminus\R$, où $f$ est holomorphe. Par l'étape 0, l'intégrale de $f$ sur le lacet $[a+i\eps,b+i\eps]\vee[b+i\eps,c+i\eps]\vee[c+i\eps,a+i\eps]$ est nulle. Ce lacet est le bord de $T$ translaté ; en paramétrant chaque segment translaté par $t\mapsto\gamma(t)+i\eps$ (même dérivée $\gamma'$), on obtient
$$
0=\int_{[a,b]}f(w+i\eps)\,dw+\int_{[b,c]}f(w+i\eps)\,dw+\int_{[c,a]}f(w+i\eps)\,dw .
$$
Or $f$ est continue sur le compact $K$, donc uniformément continue (Heine) ; comme $w$ et $w+i\eps$ sont dans $K$ pour $w\in T$, $\eta(\eps):=\sup_{w\in T}|f(w+i\eps)-f(w)|\to0$ quand $\eps\to0$. Par la majoration fondamentale ([[ch01-longueur-majoration-integrale]]), en notant $L$ le périmètre de $T$,
$$
|I(a,b,c)|=\Big|\int_{\partial T}\big(f(w)-f(w+i\eps)\big)\,dw\Big|\le L\,\eta(\eps)\xrightarrow[\eps\to0]{}0 .
$$
Donc $I(a,b,c)=0$. Le cas $T\subset\{\Im(z)\le0\}$ est identique avec $T-i\eps$.

**Étape 2 : triangle quelconque.** Soit $T=T(a,b,c)\subset\Omega$. Si $T$ est contenu dans l'un des demi-plans fermés $\{\Im\ge0\}$ ou $\{\Im\le0\}$, c'est l'étape 1. Sinon, un sommet est strictement d'un côté et un autre strictement de l'autre ; quitte à renommer les sommets et à échanger les rôles des deux demi-plans, on peut supposer $\Im(a)>0$, $\Im(b)\le0$, $\Im(c)\le0$. Par le théorème des valeurs intermédiaires appliqué à $\Im$ le long de $[a,b]$ et $[a,c]$, il existe $b'\in[a,b]\cap\R$ et $c'\in[a,c]\cap\R$. Alors, en écrivant $[a,b]=[a,b']\vee[b',b]$ et $[c,a]=[c,c']\vee[c',a]$, et en utilisant que $\int_{[q,p]}=-\int_{[p,q]}$, on vérifie arête par arête que
$$
I(a,b,c)=I(a,b',c')+I(b',b,c)+I(b',c,c') :
$$
les arêtes $[b',c']$ et $[b',c]$ apparaissent chacune une fois dans chaque sens et se compensent. Les trois triangles sont contenus dans $T\subset\Omega$ (convexité) ; $T(a,b',c')\subset\{\Im\ge0\}$ et $T(b',b,c)$, $T(b',c,c')\subset\{\Im\le0\}$. Par l'étape 1, les trois termes sont nuls, donc $I(a,b,c)=0$.

**Conclusion de (1').** $f$ est continue sur $\Omega$ et $I(a,b,c)=0$ pour tout triangle plein $T(a,b,c)\subset\Omega$ : par le théorème de Morera ([[ch01-morera]]), $f\in\Hol(\Omega)$.

**Preuve de (2').** *$F$ est bien définie.* Si $z\in\Omega^-$, alors $\bar z\in\Omega$ (stabilité) et $\Im(\bar z)\ge0$, donc $\bar z\in\Omega^+$. Sur $\Omega^+\cap\Omega^-=\Omega\cap\R$, les deux définitions donnent $f(x)$ et $\overline{f(\bar x)}=\overline{f(x)}$, égales car $f(x)\in\R$.

*$F$ est continue sur $\Omega$.* $F$ est continue sur $\Omega^+$ (c'est $f$) et sur $\Omega^-$ (composée de fonctions continues). Les ensembles $\Omega^+$ et $\Omega^-$ sont fermés dans $\Omega$ et recouvrent $\Omega$ : si $z_n\to z$ dans $\Omega$, on sépare la suite en ses termes dans $\Omega^+$ et ceux dans $\Omega^-$ ; si l'une des sous-suites est infinie, sa limite $z$ est dans le fermé correspondant et $F(z_n)\to F(z)$ le long de cette sous-suite. Donc $F(z_n)\to F(z)$.

*$F$ est holomorphe sur $\Omega\setminus\R$.* Sur $\{\Im>0\}\cap\Omega$, $F=f$ est holomorphe. Soit $z_0\in\Omega$ avec $\Im(z_0)<0$ ; pour $z\neq z_0$ proche de $z_0$ (avec $\Im(z)<0$),
$$
\frac{F(z)-F(z_0)}{z-z_0}=\overline{\left(\frac{f(\bar z)-f(\bar z_0)}{\bar z-\bar z_0}\right)}\xrightarrow[z\to z_0]{}\overline{f'(\bar z_0)} ,
$$
car $\bar z\to\bar z_0$ et $f$ est $\C$-dérivable en $\bar z_0$ (qui vérifie $\Im(\bar z_0)>0$). Donc $F$ est $\C$-dérivable en $z_0$ avec $F'(z_0)=\overline{f'(\bar z_0)}$, et $z\mapsto\overline{f'(\bar z)}$ est continue : $F$ est holomorphe sur $\{\Im<0\}\cap\Omega$ ([[ch01-def-holomorphe]]).

*Conclusion.* $F$ est continue sur $\Omega$ et holomorphe sur $\Omega\setminus\R$ ; par (1'), $F\in\Hol(\Omega)$. $\square$

*Remarque.* Une fois $f$ holomorphe sur $\Omega$, la formule de Cauchy ([[ch01-cauchy-formule-disque]]) s'applique sur tout disque fermé de $\Omega$, y compris centré sur l'axe réel ; c'est ainsi qu'on exploite ensuite le prolongement (développement en série entière en un point réel, etc.).

## Preuve à trous

(1') Soit $T=T(a,b,c)\subset\Omega\cap\{\Im\ge0\}$ et $\delta>0$ tel que $\{\dist(\cdot,T)\le\delta\}\subset\Omega$. Pour $0<\eps<\delta/2$, le triangle <trou indice="déplacer le triangle pour qu'il ne touche plus l'axe">translaté $T+i\eps$ est contenu dans l'ouvert convexe $U_\eps=\{\dist(\cdot,T+i\eps)<\eps\}\subset\Omega\cap\{\Im>0\}$</trou>, où $f$ est holomorphe ; par Cauchy sur un convexe (étoilé donc simplement connexe), l'intégrale de $f$ sur son bord est nulle, c'est-à-dire $\int_{\partial T}f(w+i\eps)\,dw=0$. Comme <trou indice="quelle propriété de f sur un compact ?">$f$ est uniformément continue sur le compact $\{\dist(\cdot,T)\le\delta\}$, on a $\sup_{w\in\partial T}|f(w+i\eps)-f(w)|\to0$</trou>, d'où $\int_{\partial T}f=0$ par la majoration $|\int_\gamma g|\le L(\gamma)\sup_\gamma|g|$.

Un triangle quelconque $T(a,b,c)\subset\Omega$ coupé par l'axe (disons $\Im a>0\ge\Im b,\Im c$) se découpe, avec $b'\in[a,b]\cap\R$ et $c'\in[a,c]\cap\R$, en <trou indice="les arêtes intérieures se compensent">$I(a,b,c)=I(a,b',c')+I(b',b,c)+I(b',c,c')$, trois triangles chacun d'un seul côté de l'axe</trou>, donc $I(a,b,c)=0$, et <trou>le théorème de Morera (f continue, intégrales nulles sur les triangles)</trou> conclut.

(2') $F$ est bien définie et continue car <trou indice="sur l'axe, les deux formules doivent coïncider">pour $x\in\Omega\cap\R$, $\overline{f(\bar x)}=\overline{f(x)}=f(x)$ puisque $f(x)\in\R$</trou> (recollement de deux fonctions continues sur deux fermés). Pour $\Im z_0<0$ :
$$
\frac{F(z)-F(z_0)}{z-z_0}=\overline{\left(\frac{f(\bar z)-f(\bar z_0)}{\bar z-\bar z_0}\right)}\to\overline{f'(\bar z_0)},
$$
donc $F$ est holomorphe hors de $\R$, et (1') conclut. $\square$

## Exemples

* **Un calcul direct.** $f(z)=z^2+1$ sur $D^+$ est réelle sur $]-1,1[$. La réflexion donne, pour $z\in D^-$, $F(z)=\overline{(\bar z)^2+1}=z^2+1$ : on retrouve le prolongement évident. En revanche $f(z)=e^{iz}$ n'est pas réelle sur l'axe ($e^{ix}\notin\R$ pour $x\notin\pi\Z$) : la formule donnerait $\overline{e^{i\bar z}}=e^{-iz}\neq e^{iz}$, et $F$ ne serait pas continue sur l'axe.
* **Liouville sur un demi-plan.** Soit $H=\{\Im(z)>0\}$ et $f$ continue sur $\bar H=\{\Im(z)\ge0\}$, holomorphe sur $H$, réelle sur $\R$ et bornée par $M$. On applique (2') avec $\Omega=\C$ (stable par conjugaison) : $F$ est entière et $|F(z)|=|f(\bar z)|\le M$ pour $\Im(z)\le0$, donc $F$ est bornée sur $\C$, donc constante par [[ch01-liouville]]. Ainsi $f$ est constante.
* **Symétrie des fonctions réelles sur l'axe.** Si $f\in\Hol(D)$ prend des valeurs réelles sur $]-1,1[$, alors $f(\bar z)=\overline{f(z)}$ pour tout $z\in D$. En effet $g(z)=\overline{f(\bar z)}$ est holomorphe sur $D$ (même calcul de taux d'accroissement que dans la preuve), et $g=f$ sur $]-1,1[$, qui a des points d'accumulation dans $D$ ; par le prolongement analytique ([[ch01-prolongement-analytique]]), $g=f$ sur $D$ (connexe). Exemple : $\cos$, $\exp$, tout polynôme à coefficients réels.

## Pièges

* > ⚠️ La réflexion est $F(z)=\overline{f(\bar z)}$ (**deux** conjugaisons). La fonction $z\mapsto f(\bar z)$ seule n'est pas holomorphe (elle est « antiholomorphe »), et $\overline{f(z)}$ non plus — sauf si $f$ est localement constante ([[ch01-module-conjugue-non-holomorphes]]).
* > ⚠️ La continuité **jusqu'au** segment est indispensable : être holomorphe séparément au-dessus et au-dessous ne suffit pas (contre-exemple de H1).
* $D^+$ et $D^-$ sont les demi-disques **fermés du côté du diamètre** : le diamètre est dans les deux, c'est là que la réalité des valeurs assure la cohérence.
* L'ensemble exceptionnel doit être mince (segment, ou plus généralement une droite) : hors d'un disque fermé, le résultat est faux (contre-exemple de H2).
* Si $f$ prend ses valeurs dans une autre droite sur l'axe, on se ramène au cas réel : par exemple si $f(x)\in i\R$, on applique le résultat à $-if$, ce qui donne le prolongement $F(z)=-\overline{f(\bar z)}$ en bas.
* Dans (2'), ne pas oublier que $\Omega$ doit être stable par conjugaison ; sinon on travaille sur $\Omega\cap\bar\Omega$.
