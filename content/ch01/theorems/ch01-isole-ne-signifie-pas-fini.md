---
id: ch01-isole-ne-signifie-pas-fini
type: proposition
chapter: 1
title: "« Isolé » ne signifie pas « en nombre fini » : $\sin(\pi z)$"
ref: Remarque I.11.5
page: 28
importance: 2
depends: [ch01-zeros-isoles, ch01-exp-trigo-hyperboliques, ch01-ensemble-zeros-discret-ferme]
tags: [zeros, isole, localement-fini, sinus, contre-exemple]
---
## Intuition

> 💡 Le principe des zéros isolés ([[ch01-zeros-isoles]]) interdit aux zéros d'une fonction holomorphe non nulle de **s'agglutiner** en un point du domaine ; il ne les empêche pas d'être **infiniment nombreux**, à condition qu'ils soient « bien espacés » et partent à l'infini (ou vers le bord du domaine).

L'exemple type est $\sin(\pi z)$, nulle exactement aux entiers : une infinité de zéros, chacun isolé, régulièrement espacés de $1$. Ce que garantit la théorie, c'est seulement la **finitude locale** : un compact du domaine ne contient qu'un nombre fini de zéros ([[ch01-ensemble-zeros-discret-ferme]]). Cette distinction entre « fini » et « localement fini » sera cruciale pour la formule des résidus (Remarque II.5.2, [[ch02-support-fini-remarque]]) et pour les produits infinis du chapitre III.

Rappel : $\sin z:=\dfrac{e^{iz}-e^{-iz}}{2i}$ pour $z\in\C$, fonction entière ([[ch01-exp-trigo-hyperboliques]]).

## Énoncé

**Proposition (poly, Remarque I.11.5, p. 28).** Une fonction holomorphe non identiquement nulle sur un ouvert connexe peut avoir une infinité de zéros isolés. Par exemple, $f:z\mapsto\sin(\pi z)$ est holomorphe sur $\C$, non identiquement nulle, et
$$
Z(f,\C)=\Z ;
$$
chacun de ces zéros est simple. Ce que garantit le principe des zéros isolés est la propriété, plus faible que la finitude, d'être **localement fini** : si $\Omega$ est connexe et $f\in\Hol(\Omega)$ non identiquement nulle, $Z(f,\Omega)\cap K$ est fini pour tout compact $K\subset\Omega$, mais $Z(f,\Omega)$ peut être infini.

## Hypothèses

### H1 — $K$ compact (en particulier borné)

**Rôle.** La finitude de $Z(f,\Omega)\cap K$ vient d'un recouvrement fini de $K$ par des disques contenant chacun au plus un zéro ; il faut la compacité de $K$ (Borel–Lebesgue).

**Si on la retire.** Pour $f(z)=\sin(\pi z)$ et $K=\R$ (fermé, non borné), $Z(f,\C)\cap\R=\Z$ est infini. Avec $K=\Omega=\C$, idem.

### H2 — $K$ inclus dans $\Omega$

**Rôle.** Les disques « à au plus un zéro » sont centrés en des points de $\Omega$ ; un point du bord de $\Omega$ n'en a pas.

**Si on la retire.** $f(z)=\sin\big(\frac{\pi}{1-z}\big)$ sur $\Omega=D(0,1)$ s'annule exactement en les points $1-\frac1k$, $k\ge1$ (voir [[ch01-ensemble-zeros-discret-ferme]]) : une infinité de zéros dans l'ensemble **borné** $\Omega$. Le compact $K=[0,1]$ contient tous ces zéros, mais $K\not\subset\Omega$ puisque $1\notin\Omega$ ; et $[0,1[\subset\Omega$ est borné mais n'est pas compact.

### H3 — $\Omega$ connexe, $f$ non identiquement nulle

**Rôle.** Ce sont les hypothèses du principe des zéros isolés.

**Si on la retire.** $f\equiv0$ sur $\C$ : $Z(f,\C)\cap\bar D(0,1)=\bar D(0,1)$, infini.

## Idée de la preuve

$\sin(\pi z)=0\iff e^{2i\pi z}=1\iff z\in\Z$ ; la dérivée $\pi\cos(\pi k)=\pm\pi$ ne s'annule pas, donc zéros simples. Un compact est borné donc ne contient qu'un nombre fini d'entiers ; dans le cas général, c'est [[ch01-ensemble-zeros-discret-ferme]].

## Preuve

**Holomorphie et non-nullité.** $z\mapsto\sin(\pi z)$ est la composée de $z\mapsto\pi z$ et de $\sin$, entières ([[ch01-exp-trigo-hyperboliques]], [[ch01-stabilite-operations]]) ; elle n'est pas identiquement nulle car $\sin(\pi/2)=1$.

**Les zéros.** Pour $z\in\C$,
$$
\sin(\pi z)=0\iff e^{i\pi z}=e^{-i\pi z}\iff e^{2i\pi z}=1 ,
$$
(on a multiplié par $e^{i\pi z}\neq0$). Or $e^{w}=1\iff w\in2i\pi\Z$ : en effet, en écrivant $w=u+iv$, $|e^w|=e^u=1$ impose $u=0$, puis $e^{iv}=\cos v+i\sin v=1$ impose $v\in2\pi\Z$ ([[ch01-exp-trigo-hyperboliques]]). Donc $\sin(\pi z)=0\iff 2i\pi z\in2i\pi\Z\iff z\in\Z$ : $Z(f,\C)=\Z$, ensemble infini.

**Simplicité et isolement.** $f'(z)=\pi\cos(\pi z)$, donc $f'(k)=\pi\cos(\pi k)=\pi(-1)^k\neq0$ : chaque entier est un zéro simple ([[ch01-def-multiplicite-zero]]). Chaque zéro est isolé : $D(k,\tfrac12)\cap\Z=\{k\}$ (ce que le principe des zéros isolés garantissait a priori).

**Finitude locale.** Si $K\subset\C$ est compact, il est borné, disons $K\subset\bar D(0,R)$, et $K\cap\Z\subset\{k\in\Z:|k|\le R\}$, qui a au plus $2R+1$ éléments. Dans le cas général d'un ouvert connexe $\Omega$ et de $f\in\Hol(\Omega)$ non identiquement nulle, $Z(f,\Omega)\cap K$ est fini pour tout compact $K\subset\Omega$ par [[ch01-ensemble-zeros-discret-ferme]]. $\square$

## Preuve à trous

On a $\sin(\pi z)=0\iff$ <trou indice="écrire sin avec des exponentielles">$e^{i\pi z}=e^{-i\pi z}\iff e^{2i\pi z}=1$</trou>. Or <trou indice="module et argument de $e^{u+iv}$">$e^w=1\iff w\in2i\pi\Z$, car $|e^{u+iv}|=e^u$ et $e^{iv}=1\iff v\in2\pi\Z$</trou>, donc $Z(f,\C)=\Z$, infini. Chaque zéro est simple car <trou>$f'(k)=\pi\cos(\pi k)=\pi(-1)^k\neq0$</trou>. Enfin un compact $K$ est borné, $K\subset\bar D(0,R)$, donc <trou>$K\cap\Z\subset\{-\lfloor R\rfloor,\dots,\lfloor R\rfloor\}$ est fini</trou>. $\square$

## Exemples

* **$e^z-1$** a pour zéros $2i\pi\Z$ : infinité de zéros simples ($f'=e^z\neq0$), sur l'axe imaginaire.
* **$\cos z$** a pour zéros $\frac\pi2+\pi\Z$ (même calcul : $e^{2iz}=-1\iff 2iz\in i\pi+2i\pi\Z$), tous simples car $\cos'=-\sin$ vaut $\mp1$ en ces points.
* **Zéros qui s'accumulent au bord.** $\sin\big(\frac{\pi}{1-z}\big)$ sur $D(0,1)$ : zéros $1-\frac1k$, $k\ge1$, infiniment nombreux dans un ouvert **borné**, s'accumulant en $1\in\partial D(0,1)$. Ici l'infinité de zéros ne vient pas de l'infini mais du bord.

## Pièges

* > ⚠️ Ne jamais conclure « $f$ a une infinité de zéros, donc $f\equiv0$ ». Il faut un zéro **non isolé dans $\Omega$**, c'est-à-dire un point d'accumulation des zéros **appartenant à $\Omega$** ([[ch01-prolongement-analytique]]).
* Réflexe polynomial trompeur : « au plus $d$ racines » n'a pas d'analogue pour une fonction entière quelconque.
* Une infinité de zéros dans un ouvert **borné** $\Omega$ est possible (accumulation au bord) ; c'est dans un **compact inclus dans $\Omega$** qu'il y en a un nombre fini.
* Dans la formule des résidus, on n'a pas besoin que l'ensemble des singularités soit fini, seulement localement fini : seules celles « entourées » par le lacet comptent, et elles sont en nombre fini ([[ch02-support-fini-remarque]]).
