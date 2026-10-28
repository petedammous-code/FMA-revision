---
id: ch06-lipschitz-contractante-def
type: definition
chapter: 6
title: Application lipschitzienne, $a$-lipschitzienne, contractante
ref: non numéroté, section VI.1, p. 115
page: 115
importance: 2
depends: []
tags: [lipschitz, contractante, espace-metrique, point-fixe, definition]
---
## Intuition

> 💡 Une application est **lipschitzienne** quand elle ne peut pas « étirer » les distances plus qu'un facteur fixe $a$ : deux points à distance $\delta$ ont des images à distance au plus $a\,\delta$. Elle est **contractante** quand ce facteur est strictement plus petit que $1$ : elle rapproche **uniformément** tous les couples de points.

Image mentale : une photocopieuse réglée en réduction à $80\,\%$, appliquée à une feuille posée sur la vitre ; en réitérant, toute la feuille se ratatine vers un seul point, qui ne bouge pas : c'est le point fixe du théorème de Banach ([[ch06-point-fixe-banach]]).

Rappel : un **espace métrique** $(X,d)$ est un ensemble $X$ muni d'une distance $d : X\times X\to[0,+\infty[$ (symétrique, nulle exactement sur la diagonale, vérifiant l'inégalité triangulaire). Dans un espace vectoriel normé, $d(x,y)=\|x-y\|$.

## Énoncé

**Définition (poly, section VI.1, p. 115, non numérotée).** Soient $(X,d_X)$ et $(Y,d_Y)$ des espaces métriques. Une application $T : X\to Y$ est dite **lipschitzienne** s'il existe une constante réelle positive $a$ telle que, quels que soient $x,y\in X$,
$$
d_Y(T(x),T(y))\le a\,d_X(x,y).
$$
On dit alors que $T$ est **$a$-lipschitzienne**. Une application lipschitzienne est en particulier continue.

Si $(Y,d_Y)=(X,d_X)$ et que la constante $a$ est strictement plus petite que $1$, on dit que $T : X\to X$ est **contractante**.

**Justification de « lipschitzienne ⇒ continue ».** Si $T$ est $a$-lipschitzienne avec $a>0$ et $\eps>0$, alors $d_X(x,y)<\eps/a$ entraîne $d_Y(T(x),T(y))<\eps$ : $T$ est même **uniformément** continue (et si $a=0$, $T$ est constante).

## Hypothèses

### H1 — la constante $a$ est la même pour tous les couples $(x,y)$

**Rôle.** C'est l'uniformité qui fait marcher le théorème de point fixe : dans la preuve de [[ch06-point-fixe-banach]], on itère l'inégalité $d(T(u),T(v))\le a\,d(u,v)$ et on obtient $a^n$, puis la somme géométrique $\sum a^j=1/(1-a)$.

**Si on la retire.** « Lipschitzienne au voisinage de chaque point » (localement lipschitzienne) est strictement plus faible : $x\mapsto x^2$ sur $\R$ est localement lipschitzienne (elle est $2R$-lipschitzienne sur $[-R,R]$ par les accroissements finis) mais pas lipschitzienne sur $\R$, car $\dfrac{|x^2-y^2|}{|x-y|}=|x+y|$ n'est pas borné.

### H2 — « contractante » exige $a<1$ **strictement** et $T : X\to X$

**Rôle.** $a<1$ donne la convergence de la série géométrique ; $Y=X$ permet d'itérer $T$.

**Si on la retire.** « $d(T(x),T(y))<d(x,y)$ pour tous $x\ne y$ » n'est **pas** être contractante. Exemple : $T(x)=x+\dfrac1x$ sur $X=[1,+\infty[$. On a $T(X)\subset[2,+\infty[\subset X$ et, pour $x\ne y$ dans $X$,
$$
|T(x)-T(y)|=|x-y|\,\Big|1-\frac{1}{xy}\Big|<|x-y|\qquad(\text{car }xy\ge1\text{, donc }0\le 1-\tfrac1{xy}<1),
$$
mais le rapport $|1-1/(xy)|$ tend vers $1$ quand $x,y\to+\infty$ : aucune constante $a<1$ ne convient. Et $T$ n'a pas de point fixe ($T(x)=x\iff 1/x=0$). De même $T(x)=\sqrt{x^2+1}$ sur $\R$ vérifie $|T'(x)|=\dfrac{|x|}{\sqrt{x^2+1}}<1$, donc $|T(x)-T(y)|<|x-y|$ pour $x\ne y$, mais $T(x)>|x|\ge x$ : pas de point fixe.

## Exemples

* **Applications linéaires continues.** Si $E,F$ sont des evn et $L\in\mathcal L(E;F)$, alors $\|L(x)-L(y)\|\le\|L\|\,\|x-y\|$ : $L$ est $\|L\|$-lipschitzienne (norme d'opérateur, [[ch05-norme-operateur-def]]), et c'est la meilleure constante. La norme $x\mapsto\|x\|$ est $1$-lipschitzienne (inégalité triangulaire renversée $\big|\|x\|-\|y\|\big|\le\|x-y\|$).
* **Fonctions à différentielle bornée sur un convexe.** Si $U$ est un ouvert **convexe** d'un evn $E$, $f : U\to F$ différentiable et $\|df_x\|\le k$ pour tout $x\in U$, alors $f$ est $k$-lipschitzienne : c'est l'inégalité des accroissements finis ([[ch05-accroissements-finis]]). Par exemple $\cos$ est $(\sin 1)$-lipschitzienne sur $[0,1]$ (car $|\cos'|=|\sin|\le\sin 1\approx0{,}841$ sur $[0,1]$) et envoie $[0,1]$ dans $[\cos 1,1]\subset[0,1]$ : c'est une application contractante de $[0,1]$.
* **Une fonction continue non lipschitzienne.** $x\mapsto\sqrt x$ sur $[0,1]$ : $\dfrac{|\sqrt x-\sqrt0|}{|x-0|}=\dfrac1{\sqrt x}\to+\infty$ quand $x\to0^+$. Elle est pourtant uniformément continue : la réciproque de « lipschitzienne ⇒ uniformément continue » est fausse.

## Pièges

* > ⚠️ « Contractante » = **une** constante $a<1$ valable pour **tous** les couples. Vérifier $|T'(x)|<1$ en chaque point ne suffit pas (exemple $x+1/x$ ci-dessus) ; il faut $\sup|T'|\le a<1$ (sur un convexe).
* Le caractère contractant **dépend de la distance** choisie. Sur $\R^2$, $T(x_1,x_2)=(2x_2,0)$ n'est contractante pour aucune norme usuelle ($\|T(0,1)\|_\infty=2$), mais $T\circ T=0$ ; pour la norme $\|(x_1,x_2)\|'=|x_1|+3|x_2|$, on a $\|T(x)\|'=2|x_2|\le\frac23\|x\|'$ : $T$ devient $\frac23$-contractante. Voir aussi [[ch06-point-fixe-iteree-contractante]].
* Pour appliquer les accroissements finis et obtenir une constante de Lipschitz à partir d'une borne sur la différentielle, il faut un domaine **convexe** (ou au moins que les segments utiles soient contenus dans le domaine).
* Ne pas confondre « $a$-lipschitzienne » (inégalité **large** $\le a\,d$) et « contractante » (qui exige en plus $a<1$ et $Y=X$).
